"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import {
  type UIEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RecentServiceCard } from "./RecentServiceCard";
import { RecentServiceModal } from "./RecentServiceModal";
import { recentServices, type RecentService } from "./recentServicesData";
import styles from "./StylesRecentServices.module.css";

const HORIZONTAL_NAVIGATION_THRESHOLD = 8;

export function RecentServices() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselDiscoveryOriginRef = useRef(0);
  const hasDiscoveredHorizontalNavigationRef = useRef(false);
  const programmaticTargetRef = useRef<number | null>(null);
  const scrollMonitorFrameRef = useRef<number | null>(null);
  const [selectedService, setSelectedService] = useState<RecentService | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hasInteractedWithCarousel, setHasInteractedWithCarousel] =
    useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const markHorizontalNavigationAsDiscovered = useCallback(() => {
    if (hasDiscoveredHorizontalNavigationRef.current) return;

    hasDiscoveredHorizontalNavigationRef.current = true;
    setHasInteractedWithCarousel(true);
  }, []);

  const getClosestServiceIndex = useCallback((carousel: HTMLDivElement) => {
    const cards = Array.from(carousel.children) as HTMLElement[];

    if (!cards.length) return 0;

    const firstCardOffset = cards[0].offsetLeft;
    return cards.reduce((closest, card, index) => {
      const closestDistance = Math.abs(
        cards[closest].offsetLeft - firstCardOffset - carousel.scrollLeft,
      );
      const currentDistance = Math.abs(
        card.offsetLeft - firstCardOffset - carousel.scrollLeft,
      );
      return currentDistance < closestDistance ? index : closest;
    }, 0);
  }, []);

  const finishProgrammaticNavigation = useCallback(
    (carousel: HTMLDivElement) => {
      programmaticTargetRef.current = null;

      if (scrollMonitorFrameRef.current !== null) {
        cancelAnimationFrame(scrollMonitorFrameRef.current);
        scrollMonitorFrameRef.current = null;
      }

      setActiveService(getClosestServiceIndex(carousel));
    },
    [getClosestServiceIndex],
  );

  const scrollToService = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      const cards = Array.from(carousel?.children ?? []) as HTMLElement[];
      const card = cards[index];

      if (!carousel || !card || !cards[0]) return;

      if (scrollMonitorFrameRef.current !== null) {
        cancelAnimationFrame(scrollMonitorFrameRef.current);
      }

      const requestedLeft = card.offsetLeft - cards[0].offsetLeft;
      const targetLeft = Math.min(
        Math.max(requestedLeft, 0),
        carousel.scrollWidth - carousel.clientWidth,
      );
      let previousScrollLeft = carousel.scrollLeft;
      let hasMoved = false;
      let stableFrames = 0;

      programmaticTargetRef.current = index;
      setActiveService(index);

      if (
        Math.abs(targetLeft - carousel.scrollLeft) >=
        HORIZONTAL_NAVIGATION_THRESHOLD
      ) {
        markHorizontalNavigationAsDiscovered();
      }

      carousel.scrollTo({
        left: requestedLeft,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });

      const monitorScroll = () => {
        if (programmaticTargetRef.current !== index) return;

        const currentScrollLeft = carousel.scrollLeft;
        const reachedTarget = Math.abs(currentScrollLeft - targetLeft) <= 1;
        const positionChanged =
          Math.abs(currentScrollLeft - previousScrollLeft) > 0.1;

        if (positionChanged) {
          hasMoved = true;
          stableFrames = 0;
        } else if (hasMoved) {
          stableFrames += 1;
        }

        if (reachedTarget || stableFrames >= 3) {
          finishProgrammaticNavigation(carousel);
          return;
        }

        previousScrollLeft = currentScrollLeft;
        scrollMonitorFrameRef.current = requestAnimationFrame(monitorScroll);
      };

      scrollMonitorFrameRef.current = requestAnimationFrame(monitorScroll);
    },
    [finishProgrammaticNavigation, markHorizontalNavigationAsDiscovered],
  );

  const handleCarouselScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const carousel = event.currentTarget;

      if (
        Math.abs(
          carousel.scrollLeft - carouselDiscoveryOriginRef.current,
        ) >= HORIZONTAL_NAVIGATION_THRESHOLD
      ) {
        markHorizontalNavigationAsDiscovered();
      }

      if (programmaticTargetRef.current !== null) return;

      setActiveService(getClosestServiceIndex(carousel));
    },
    [getClosestServiceIndex, markHorizontalNavigationAsDiscovered],
  );

  const handleManualCarouselInteraction = useCallback(() => {
    const carousel = carouselRef.current;

    if (programmaticTargetRef.current !== null && carousel) {
      finishProgrammaticNavigation(carousel);
    }
  }, [finishProgrammaticNavigation]);

  const openDetails = useCallback((service: RecentService) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeDetails = useCallback(() => {
    setIsModalOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setSelectedService(null);
      closeTimerRef.current = null;
    }, 220);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (scrollMonitorFrameRef.current !== null) {
        cancelAnimationFrame(scrollMonitorFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className={styles.section}
        id="servicos-recentes"
        aria-labelledby="recent-services-title"
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>
                <span aria-hidden="true" />
                Delorian em ação
              </span>
              <div className={styles.titleRow}>
                <Image
                  src="/assets/raioAzul.png"
                  width={30}
                  height={94}
                  alt=""
                  aria-hidden="true"
                  className={styles.titleIcon}
                />
                <h2 className={styles.sectionTitle} id="recent-services-title">
                  Serviços realizados recentemente
                </h2>
              </div>
              <p className={styles.sectionDescription}>
                Confira alguns atendimentos concluídos recentemente pela nossa
                equipe em Curitiba e região metropolitana.
              </p>
            </div>
          </div>

          <div
            ref={carouselRef}
            className={styles.cards}
            onScroll={handleCarouselScroll}
            onPointerDown={handleManualCarouselInteraction}
            onWheel={handleManualCarouselInteraction}
          >
            {recentServices.map((service) => (
              <RecentServiceCard
                key={service.id}
                service={service}
                onOpenDetails={openDetails}
              />
            ))}
          </div>

          {recentServices.length > 1 && (
            <div className={styles.mobileCarouselNavigation}>
              <p
                className={`${styles.swipeHint} ${
                  hasInteractedWithCarousel ? styles.swipeHintHidden : ""
                }`}
              >
                <MoveHorizontal aria-hidden="true" />
                Deslize para ver mais
              </p>

              <div
                className={styles.carouselPagination}
                role="group"
                aria-label="Selecionar serviço recente"
              >
                {recentServices.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    className={
                      index === activeService
                        ? styles.activePaginationDot
                        : styles.paginationDot
                    }
                    aria-label={`Ir para o serviço ${index + 1}`}
                    aria-current={index === activeService ? "true" : undefined}
                    onClick={() => scrollToService(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <RecentServiceModal
        key={selectedService?.id ?? "closed"}
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeDetails}
      />
    </>
  );
}
