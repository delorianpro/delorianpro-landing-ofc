import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
} from "lucide-react";
import type { RecentService } from "./recentServicesData";
import { RecentServiceCategoryIcon } from "./RecentServiceCategoryIcon";
import styles from "./StylesRecentServices.module.css";

interface RecentServiceCardProps {
  service: RecentService;
  onOpenDetails: (service: RecentService) => void;
}

export function RecentServiceCard({
  service,
  onOpenDetails,
}: RecentServiceCardProps) {
  const coverImage = service.images?.[0];
  const detailsContent = (
    <>
      Ver detalhes
      <ArrowRight aria-hidden="true" />
    </>
  );

  return (
    <article
      className={styles.card}
      onClick={() => onOpenDetails(service)}
    >
      <div className={styles.media}>
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            sizes="(max-width: 700px) 86vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.serviceImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderLabel}>Imagem a adicionar</span>
            <span className={styles.placeholderIcon}>
              <RecentServiceCategoryIcon category={service.category} />
            </span>
            <span className={styles.placeholderText}>{service.category}</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.tags}>
          <span className={styles.categoryTag}>
            <RecentServiceCategoryIcon category={service.category} />
            {service.category}
          </span>
          <span className={styles.statusTag}>
            <Check aria-hidden="true" />
            {service.status}
          </span>
        </div>

        <div className={styles.copy}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.description}</p>
        </div>

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

        <div className={styles.cardFooter}>
          <button
            type="button"
            className={styles.detailsLink}
            aria-haspopup="dialog"
          >
            {detailsContent}
          </button>
        </div>
      </div>
    </article>
  );
}
