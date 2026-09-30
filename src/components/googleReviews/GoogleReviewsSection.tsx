"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { KeyboardEvent, UIEvent, useRef, useState } from "react";
import { GOOGLE_REVIEWS, GoogleReview } from "./googleReviewsData";
import styles from "./StylesGoogleReviewsSection.module.css";

// TODO: Adicione aqui a URL pública com todas as avaliações da Delorian.
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Delorian+Pro/@-25.5954997,-49.6909849,10z/data=!4m8!3m7!1s0x94dce57f5f15842b:0xda804bc0ad3bfc5a!8m2!3d-25.59649!4d-49.3606505!9m1!1b1!16s%2Fg%2F11y98z1qbn?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D";
// TODO: Adicione aqui a URL direta do formulário para publicar uma avaliação.
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CVr8O63AS4DaEAI/review";

const GOOGLE_RATING = "5,0";
const GOOGLE_REVIEW_COUNT = "+30 avaliações";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#FFC107" d="M43.61 20.08H42V20H24v8h11.3A12 12 0 1 1 31.9 15.3l5.66-5.66A20 20 0 1 0 44 24c0-1.34-.14-2.65-.39-3.92Z" />
      <path fill="#FF3D00" d="m6.3 14.69 6.57 4.82A12 12 0 0 1 31.9 15.3l5.66-5.66A20 20 0 0 0 6.3 14.69Z" />
      <path fill="#4CAF50" d="M24 44c5.18 0 9.9-1.98 13.45-5.21l-6.16-5.21A11.92 11.92 0 0 1 12.9 28.5l-6.52 5.02A20 20 0 0 0 24 44Z" />
      <path fill="#1976D2" d="M43.61 20.08H42V20H24v8h11.3a12.05 12.05 0 0 1-4.02 5.58h.01l6.16 5.21C37.02 39.18 44 34 44 24c0-1.34-.14-2.65-.39-3.92Z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} de 5 estrelas`}>
      <span aria-hidden="true">{"\u2605".repeat(rating)}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewerHeader}>
        {review.photo ? (
          <Image
            className={styles.avatar}
            src={review.photo}
            alt={`Foto de ${review.name}`}
            width={72}
            height={72}
          />
        ) : (
          <div className={styles.avatarFallback} aria-hidden="true">
            {review.initials}
          </div>
        )}
        <div className={styles.reviewerIdentity}>
          <h3>{review.name}</h3>
          <Stars rating={review.rating} />
        </div>
      </div>

      <blockquote className={styles.reviewText}>
        <p>“{review.comment}”</p>
      </blockquote>

      <footer className={styles.reviewFooter}>
        <span className={styles.googleSource}>
          <GoogleLogo className={styles.googleLogoSmall} />
          <span>Avaliação no Google</span>
        </span>
        <time>{review.date}</time>
      </footer>
    </article>
  );
}

export function GoogleReviewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);

  const scrollToReview = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;

    if (!carousel || !card) return;
    card.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveReview(index);
  };

  const handleCarouselScroll = (event: UIEvent<HTMLDivElement>) => {
    const carousel = event.currentTarget;
    const cards = Array.from(carousel.children) as HTMLElement[];
    const closestIndex = cards.reduce((closest, card, index) => {
      const closestDistance = Math.abs(cards[closest].offsetLeft - carousel.scrollLeft);
      const currentDistance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveReview(closestIndex);
  };

  const handleCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = Math.min(
      Math.max(activeReview + direction, 0),
      GOOGLE_REVIEWS.length - 1,
    );
    scrollToReview(nextIndex);
  };

  const blockPlaceholderLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!event.currentTarget.getAttribute("data-configured")) {
      event.preventDefault();
    }
  };

  return (
    <section
      id="google-reviews"
      className={styles.section}
      aria-labelledby="google-reviews-title"
    >
      <div className={styles.container}>
        <header className={styles.heading}>
          <div className={styles.titleRow}>
            <Image
              src="/assets/raioAzul.png"
              alt=""
              aria-hidden="true"
              width={30}
              height={94}
              className={styles.lightning}
            />
            <h2 id="google-reviews-title">O que nossos clientes dizem</h2>
          </div>
          <p>
            Experiências reais de quem já contou com a Delorian para automação e
            segurança.
          </p>
        </header>

        <div className={styles.ratingSummary}>
          <div className={styles.ratingInfo}>
            <GoogleLogo className={styles.googleLogoLarge} />
            <div className={styles.scoreBlock}>
              <strong>{GOOGLE_RATING} no Google</strong>
              <Stars rating={5} />
            </div>
            <span className={styles.divider} aria-hidden="true" />
            <span className={styles.reviewCount}>{GOOGLE_REVIEW_COUNT}</span>
          </div>
          <a
            className={`${styles.outlineButton} ${!GOOGLE_REVIEWS_URL ? styles.disabledLink : ""}`}
            href={GOOGLE_REVIEWS_URL || "#google-reviews-title"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todas as avaliações da Delorian no Google (abre em uma nova aba)"
            aria-disabled={!GOOGLE_REVIEWS_URL}
            data-configured={GOOGLE_REVIEWS_URL || undefined}
            onClick={blockPlaceholderLink}
          >
            Ver avaliações no Google
            <ExternalLink aria-hidden="true" />
          </a>
        </div>

        <div
          ref={carouselRef}
          className={styles.reviewsGrid}
          onScroll={handleCarouselScroll}
          onKeyDown={handleCarouselKeyDown}
          tabIndex={0}
          aria-label="Avaliações de clientes. Use as setas para navegar."
        >
          {GOOGLE_REVIEWS.map((review) => (
            <ReviewCard key={`${review.name}-${review.date}`} review={review} />
          ))}
        </div>

        <div className={styles.pagination} aria-label="Selecionar avaliação">
          {GOOGLE_REVIEWS.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={index === activeReview ? styles.activeDot : styles.dot}
              aria-label={`Ir para a avaliação ${index + 1}`}
              aria-current={index === activeReview ? "true" : undefined}
              onClick={() => scrollToReview(index)}
            />
          ))}
        </div>

        <div className={styles.reviewBanner}>
          <div className={styles.bannerContent}>
            <h3>Gostou do atendimento da Delorian?</h3>
            <p>
              Compartilhe sua experiência no Google e ajude outras pessoas a
              conhecerem nosso trabalho.
            </p>
            <a
              className={`${styles.primaryButton} ${!GOOGLE_WRITE_REVIEW_URL ? styles.disabledLink : ""}`}
              href={GOOGLE_WRITE_REVIEW_URL || "#google-reviews-title"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avaliar a Delorian no Google (abre em uma nova aba)"
              aria-disabled={!GOOGLE_WRITE_REVIEW_URL}
              data-configured={GOOGLE_WRITE_REVIEW_URL || undefined}
              onClick={blockPlaceholderLink}
            >
              <GoogleLogo className={styles.buttonGoogleLogo} />
              <span>Avaliar no Google</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <Image
            className={styles.mascot}
            src="/assets/mascote.webp"
            alt="Lorito, mascote da Delorian, convidando o cliente a avaliar o atendimento"
            width={275}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
