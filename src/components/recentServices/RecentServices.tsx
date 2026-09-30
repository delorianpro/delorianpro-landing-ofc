"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { RecentServiceCard } from "./RecentServiceCard";
import { RecentServiceModal } from "./RecentServiceModal";
import {
  allServicesHref,
  recentServices,
  type RecentService,
} from "./recentServicesData";
import styles from "./StylesRecentServices.module.css";

function AllServicesLink({ mobile = false }: { mobile?: boolean }) {
  const className = `${styles.allServicesLink} ${
    mobile ? styles.mobileAllServicesLink : styles.desktopAllServicesLink
  }`;
  const content = (
    <>
      Ver todos os serviços
      <ArrowRight aria-hidden="true" />
    </>
  );

  if (allServicesHref) {
    return (
      <a className={className} href={allServicesHref}>
        {content}
      </a>
    );
  }

  return (
    <span
      className={`${className} ${styles.inactiveLink}`}
      aria-disabled="true"
      title="Link será adicionado quando a página estiver disponível"
    >
      {content}
    </span>
  );
}

export function RecentServices() {
  const [selectedService, setSelectedService] = useState<RecentService | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

            <AllServicesLink />
          </div>

          <div className={styles.cards}>
            {recentServices.map((service) => (
              <RecentServiceCard
                key={service.id}
                service={service}
                onOpenDetails={openDetails}
              />
            ))}
          </div>

          <AllServicesLink mobile />
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
