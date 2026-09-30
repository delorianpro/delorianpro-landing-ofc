"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { RecentServiceCategoryIcon } from "./RecentServiceCategoryIcon";
import type {
  RecentService,
  RecentServiceImage,
} from "./recentServicesData";
import styles from "./StylesRecentServiceModal.module.css";

interface RecentServiceModalProps {
  service: RecentService | null;
  isOpen: boolean;
  onClose: () => void;
}

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function ServicePlaceholder({
  category,
  compact = false,
}: {
  category: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`${styles.placeholder} ${compact ? styles.compactPlaceholder : ""}`}
    >
      <span className={styles.placeholderIcon}>
        <RecentServiceCategoryIcon category={category} />
      </span>
      {!compact && (
        <>
          <span className={styles.placeholderTitle}>{category}</span>
          <span className={styles.placeholderCaption}>Imagem a adicionar</span>
        </>
      )}
    </div>
  );
}

function ModalImage({
  image,
  category,
}: {
  image?: RecentServiceImage;
  category: string;
}) {
  if (!image) {
    return <ServicePlaceholder category={category} />;
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 800px) calc(100vw - 3rem), 48vw"
      className={styles.mainImage}
      priority
    />
  );
}

export function RecentServiceModal({
  service,
  isOpen,
  onClose,
}: RecentServiceModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [isOpen, onClose]);

  if (!service || typeof document === "undefined") return null;

  const images = service.images ?? [];
  const galleryItems: Array<RecentServiceImage | undefined> =
    images.length > 0 ? images : [undefined, undefined, undefined];
  const selectedImage = images[selectedImageIndex];
  const phoneNumber = "5541985011909";
  const genericWhatsAppMessage =
    "Olá, equipe Delorian! Gostaria de falar sobre um serviço.";
  const similarServiceMessage =
    service.whatsappMessage ||
    `Olá, equipe Delorian! Gostaria de solicitar um serviço semelhante a: ${service.title}.`;
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(genericWhatsAppMessage)}`;
  const similarServiceHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(similarServiceMessage)}`;

  return createPortal(
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : styles.overlayClosing}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-hidden={!isOpen}
    >
      <div
        ref={dialogRef}
        className={`${styles.dialog} ${isOpen ? styles.dialogOpen : styles.dialogClosing}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar detalhes do serviço"
        >
          <X aria-hidden="true" />
        </button>

        <div className={styles.scrollArea}>
          <div className={styles.layout}>
            <div className={styles.galleryColumn}>
              <div className={styles.mainMedia}>
                <ModalImage image={selectedImage} category={service.category} />
              </div>

              <div className={styles.thumbnails} aria-label="Galeria do serviço">
                {galleryItems.map((image, index) => (
                  <button
                    type="button"
                    className={`${styles.thumbnail} ${
                      selectedImageIndex === index ? styles.selectedThumbnail : ""
                    }`}
                    key={image?.src || `placeholder-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`Visualizar imagem ${index + 1}`}
                    aria-pressed={selectedImageIndex === index}
                  >
                    {image ? (
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="7rem"
                        className={styles.thumbnailImage}
                      />
                    ) : (
                      <ServicePlaceholder category={service.category} compact />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.detailsColumn}>
              <div className={styles.tags}>
                <span className={styles.categoryTag}>
                  <RecentServiceCategoryIcon category={service.category} />
                  {service.category}
                </span>
                <span className={styles.statusTag}>
                  <Check aria-hidden="true" />
                  {service.status}
                </span>
                <span className={styles.typeTag}>{service.type}</span>
              </div>

              <h2 className={styles.title} id={titleId}>
                {service.title}
              </h2>

              <div className={styles.meta}>
                <span>
                  <MapPin aria-hidden="true" />
                  {service.city}
                </span>
                <span className={styles.metaDivider} aria-hidden="true" />
                <span>
                  <CalendarDays aria-hidden="true" />
                  {service.date}
                </span>
              </div>

              <div className={styles.information}>
                <section className={styles.infoBlock}>
                  <h3>O serviço</h3>
                  <p id={descriptionId}>{service.description}</p>
                </section>

                <section className={styles.infoBlock}>
                  <h3>O que foi realizado</h3>
                  <ul>
                    {service.tasksPerformed.map((task, index) => (
                      <li key={`${service.id}-task-${index}`}>
                        <span>
                          <Check aria-hidden="true" />
                        </span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className={styles.infoBlock}>
                  <h3>Resultado</h3>
                  <p>{service.result}</p>
                </section>
              </div>

              <div className={styles.actions}>
                <a
                  className={styles.secondaryAction}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Falar no WhatsApp
                </a>
                <a
                  className={styles.primaryAction}
                  href={similarServiceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar serviço semelhante
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
