'use client'

import Image from 'next/image';
import styles from './StylesFooter.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const handleRedirectWhatsapp = () => {
    window.open("https://wa.me/5541985011909", "_blank");
  };
  const handleRedirectInstagram = () => {
    window.open("https://www.instagram.com/delorianpro/", "_blank");
  };
  const handleRedirectFacebook = () => {
    window.open("https://www.facebook.com/delorianpro", "_blank");
  };
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.redesSociais}>
        <a href="#" onClick={handleRedirectWhatsapp}>
          <Image src={"/assets/whatsappCopyr.webp"} alt={"WhatsApp Icon Copyr"} className={styles.whatsappImag} width={180} height={181} />
        </a>
        <a href="#" onClick={handleRedirectFacebook}>
          <Image src={"/assets/facebCopyr.webp"} alt={"Facebook Icon Copyr"} className={styles.facebookImag} width={180} height={173} />
        </a>
        <a href="#" onClick={handleRedirectInstagram}>
          <Image src={"/assets/instaCopyr.webp"} alt={"Instagram Icon Copyr"} className={styles.instagramImag} width={180} height={173} />
        </a>
      </div>
      <div className={styles.direitosReservados}>
        <Image src={"/assets/cop.svg"} alt={"Direitos Reservados"} className={styles.imageCopy} width={512} height={512} />
        <p>{currentYear} Delorian - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}