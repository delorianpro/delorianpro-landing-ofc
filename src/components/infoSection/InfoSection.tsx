'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './StylesInfoSection.module.css';

export function InfoSection() {
  const phoneNumber = '+5541985011909';
  
  const handleRedirectWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');
  };
  const handleRedirectInstagram = () => {
    window.open("https://www.instagram.com/delorianpro/", "_blank");
  };
  const handleRedirectFacebook = () => {
    window.open("https://www.facebook.com/delorianpro", "_blank");
  };
  return (
    <section className={styles.infoContainer}>
      <Link href="#voltarInicio" passHref>
        <Image src={"/assets/logoDelorian.png"} alt={"Logo Delorian"} width={14584} height={2926} className={styles.delorianlogo} />
      </Link>
      <div className={styles.blocosInfo}>
        <div className={`${styles.delorianResolve} ${styles.item2}`}>
          <h3><Link href="#delorianResolveId" className={styles.delorianResolveTitle}>Delorian resolve</Link></h3>
          <Link href="/#delorianResolveId" className={`${styles.delorianSolu} ${styles.delorianSoluFirstChild}`}>Instalação de motor em portões</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Motor não funcionando</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Motor sem força</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Motor indo só para um lado</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Motor barulhento</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Portão batendo</Link>
          <Link href="/#delorianResolveId" className={styles.delorianSolu}>Cadastro de controles</Link>
        </div>
        <div className={`${styles.horarioFuncionamento} ${styles.item3}`}>
          <h3 className={styles.funcionamentoTitle} >Horário de funcionamento</h3>
          <p className={styles.text}>Segunda à sexta: 08:30h às 18:00h</p>
          <p className={styles.text}>Sábado: 08:30h às 12:30h</p>
          <p className={styles.text}>Domingo: sem funcionamento</p>
        </div>
        <div className={`${styles.faleConosco} ${styles.item4}`}>
          <h3 className={styles.faleConoscoContatosTitle}>Fale conosco</h3>
          <a href="#" onClick={handleRedirectWhatsapp}><p className={styles.whatsappText}><Image src={"/assets/whatsIconFooter.svg"} alt="WhatsApp Icon" width={150} height={150} className={styles.whatsappImage} />(41) 9 8501-1909</p></a>
          <a href="#" onClick={handleRedirectFacebook}><p className={styles.facebookText}><Image src={"/assets/facebookIconFooter.svg"} alt="Facebook Icon" width={150} height={150}  className={styles.facebookImage}/>@delorianpro</p></a>
          <a href="#" onClick={handleRedirectInstagram}><p className={styles.instagramText}><Image src={"/assets/instagramIconFooter.svg"} alt="Instagram Icon" width={150} height={150} className={styles.instagramImage}/>@delorianpro</p></a>
        </div>
      </div>
    </section>
  );
}
