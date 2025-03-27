'use client'

import Image from "next/image";
import styles from "./StylesBannerSection.module.css";

export function BannerSection() {
  const phoneNumber = '+5541985011909'; 
  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');   
  }
  return (
    <div className={styles.bannerBg}>
      <main className={styles.bannerContainer}>
        <div className={styles.bannerTitle}>
          <h2 className={styles.title}>Automação e manutenção de portões eletrônicos</h2>
          <p className= {styles.subtitle}>Instalação, conserto e eficiência.<br/>Solicite seu orçamento grátis!</p>
          <button onClick={handleClickMakeBudget} className={styles.button}>Fazer orçamento</button>
        </div> 
        <div className={styles.bannerImages}>
          <Image 
            src="/assets/mascote.webp"
            alt={"raposa preta com a camisa da delorian"}
            width={275} 
            height={345} 
            priority={true}
            className={styles.mascote}
            />
          <Image 
            src="/assets/portaoEmotor.webp"
            alt="Imagem de portão de grade eletrônico cinza e um motor com cremalheira representando o foco da delorian"
            width={650} 
            height={531} 
            priority={true}
            className={styles.portao}
            />
        </div>    
      </main>
    </div>
  )
};