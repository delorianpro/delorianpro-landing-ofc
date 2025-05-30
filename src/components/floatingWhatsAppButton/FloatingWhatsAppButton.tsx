'use client'

import Image from "next/image";
import styles from "./StylesFloatingWhatsAppButton.module.css";

export function FloatingWhatsAppButton() {
  const phoneNumber = '+5541985011909'; 
  const handleRedirectWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <div className={styles.buttonWhatsappContainer}>
      <Image 
        src={"/assets/whatsappButton.png"} 
        onClick={handleRedirectWhatsapp} 
        className={styles.whatsappIconFixed}
        width={417}
        height={417}
        alt={"Botão do WhatsApp azul e branco"}
        priority={true}
        />
    </div>
  )
};