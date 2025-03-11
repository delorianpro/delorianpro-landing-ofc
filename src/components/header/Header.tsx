'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./StylesHeader.module.css";

export default function Header() {
  const phoneNumber = '+5541985011909'; 
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }

  return (
      <header className={styles.container}> 
        <main className={styles.main}>   
          <Link href="/">
            <Image 
              src="/assets/logoDelorian.png" 
              alt={"Logo Delorian que é o próprio nome da empresa com letra estilizada"} 
              width={270} 
              height={54} 
              priority={true}
              className={styles.logo}
              />
          </Link>
          <nav className={styles.nav}>
            <Link href="/#plansDelorianId" className={styles['nav-inicio']}>Planos</Link>
            <Link href="/#delorianResolveId" className={styles['nav-delorianResolve']}>Delorian resolve</Link>
            <button className={styles.button} onClick={handleClickTalkWithUs}>Fale conosco</button>
          </nav>
        </main>  
      </header>
  )
}