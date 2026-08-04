'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './StylesInfoSection.module.css';
import { useModal } from '../context/ModalContext';
import { solucoes } from '../servicosDelorian/ServicosDelorian';

export function InfoSection() {

  const { abrirModal } = useModal();


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
      <Link href="#inicioId" passHref>
        <Image src={"/assets/logoDelorian.webp"} alt={"Logo Delorian"} width={14584} height={2926} className={styles.delorianlogo} />
      </Link>
      <div className={styles.blocosInfo}>
        <div className={`${styles.delorianResolve} ${styles.item2}`}>
          <h3 className={styles.delorianResolveTitleBlock}><Link href="#delorianResolveId" className={styles.delorianResolveTitle}>Delorian resolve</Link></h3>
          
          <div className={`${styles.delorianResolve} ${styles.divLinks}`}>


          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Instalação de motor em portões"))!)} className={`${styles.delorianSolu} ${styles.delorianSoluFirstChild}`}>Instalação de motor em portões</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Controle de acesso"))!)} className={styles.delorianSolu}>Controle de acesso</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Alarmes"))!)} className={styles.delorianSolu}>Alarmes</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("TX-Car"))!)} className={styles.delorianSolu}>TX-Car</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Motor indo só para um lado"))!)} className={styles.delorianSolu}>Motor indo só para um lado</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Módulo Wi-fi"))!)} className={styles.delorianSolu}>Módulo Wi-fi</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Portão batendo"))!)} className={styles.delorianSolu}>Portão batendo</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Motor sem força"))!)} className={styles.delorianSolu}>Motor sem força</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Motor não funcionando"))!)} className={styles.delorianSolu}>Motor não funcionando</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Porta social"))!)} className={styles.delorianSolu}>Porta social</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Cadastro de controle"))!)} className={styles.delorianSolu}>Cadastro de controles</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Fotocélula"))!)} className={styles.delorianSolu}>Fotocélula</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Motor barulhento"))!)} className={styles.delorianSolu}>Motor barulhento</Link>
          <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Sensores"))!)} className={styles.delorianSolu}>Sensores</Link>
          </div>
         

          








        </div>
        <div className={`${styles.horarioFuncionamento} ${styles.item3}`}>
          <h3 className={styles.funcionamentoTitle} >Horário de funcionamento</h3>
          <p className={styles.text}>Segunda à sexta: 08:30h às 18:00h</p>
          <p className={styles.text}>Sábado: 08:30h às 12:30h</p>
          <p className={styles.text}>Domingo: sem funcionamento</p>
        </div>
        <div className={`${styles.faleConosco} ${styles.item4}`}>
          <h3 className={styles.faleConoscoContatosTitle}>Fale conosco</h3>
          <a href="#" onClick={handleRedirectWhatsapp}><p className={styles.whatsappText}><Image src={"/assets/whatsappCopyr.webp"} alt="WhatsApp Icon" width={180} height={181} className={styles.whatsappImage} />(41) 9 8501-1909</p></a>
          <a href="#" onClick={handleRedirectFacebook}><p className={styles.facebookText}><Image src={"/assets/facebCopyr.webp"} alt="Facebook Icon" width={180} height={173}  className={styles.facebookImage}/>@delorianpro</p></a>
          <a href="#" onClick={handleRedirectInstagram}><p className={styles.instagramText}><Image src={"/assets/instaCopyr.webp"} alt="Instagram Icon" width={180} height={173} className={styles.instagramImage}/>@delorianpro</p></a>
        </div>
      </div>
    </section>
  );
}