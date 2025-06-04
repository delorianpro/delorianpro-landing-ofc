'use client';

import Image from "next/image";
import styles from "./StylesSobreNos.module.css";
import { Check, Handshake, Heart, Wrench, Scale, ShieldCheck, Zap } from "lucide-react";

export function SobreNos() {
  const phoneNumber = '+5541985011909';
  function handleRedirectWhatsapp () {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');
  };
  return(
    <div className={styles.sobreNosComponent}>
      <div className={styles.sobreNosContainer}>
        <div className={styles.titleComponentBlock}>
          <Image
            src={'/assets/iconD.svg'}
            width={104}
            height={104}
            alt={"Ícone com a letra D e um desenho de raio azul em seu interior, simbolizando o nome e a identidade visual da Delorian."}
            className={styles.iconD}
          />
          <h2 className={styles.titleComponentText}>Sobre a Delorian</h2>
        </div>
      <div className={styles.infoContainer}>
          <div className={styles.quemSomosContainer}>
            <div className={styles.titleQuemSomosBlock}>
              <Image 
                src={'/assets/mascoteFace.webp'}
                width={200}
                height={182} alt={"Rosto do mascote da Delorian, uma simpática raposa em estilo desenho animado."} className={styles.mascoteFace}             />
              <h3>Quem somos</h3>
            </div>
              <p className={styles.pagraIntroQuemSomos}>Na<b className={styles.tagBold}> Delorian</b>, somos especialistas em <b>automação e manutenção de portões eletrônicos</b>. Atuamos em Curitiba e região metropolitana, oferecendo soluções seguras, práticas e confiáveis para residências e empresas.</p>   
            <div className={styles.blocksOqueFaEnossDif}>
              <div>
                <h3 className={styles.subTitleQuemSomos}>O que fazemos</h3>
                <ul className={styles.ulBlockQuemSomos}>
                  <li className={styles.paragraQuemSomosItemList}> Instalação de motores para portões <b className={styles.tagBold}>deslizantes, basculantes e pivotantes.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> <b className={styles.tagBold}>Manutenções preventivas e corretivas.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> Instalação de <b className={styles.tagBold}>fotocélulas (sensores antiesmagamento)</b>.</li>
                  <li className={styles.paragraQuemSomosItemList}> <b className={styles.tagBold}>Planos personalizados</b> com suporte técnico contínuo.</li>
                </ul>
              </div>
              <div>
                <h3 className={styles.subTitleQuemSomos}>Nossos diferenciais</h3>
                <ul  className={styles.ulBlockQuemSomos}>
                  <li className={styles.paragraQuemSomosItemList}> Técnicos <b>especializados e atendimento rápido.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> Foco em <b>segurança, comodidade e qualidade.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> <b>Visita técnica gratuita.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> Atendimento<b> emergencial.</b></li>
                  <li className={styles.paragraQuemSomosItemList}> Trabalhamos com as principais marcas: <i>PPA, Rossi, Peccinin, Garen, Intelbras e Nice.</i> </li>
                  <li className={styles.paragraQuemSomosItemList}> Estamos sempre <b>atentos às inovações do mercado</b>, oferecendo soluções atualizadas e eficazes.</li>                
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.nossosValoresContainer}>
            <div className={styles.titleNossaMeValoresBlock}><Heart size={60} fill="#0311FE" color="#0311FE" className={styles.heartIcon}/><h3 className={styles.titleNossaMeValores}>Nossa missão e Valores</h3></div>
              <p className={styles.pagraIntroMeValores}>Entregamos soluções em automação com <b>agilidade, transparência e compromisso com a qualidade</b>. <b>Nosso objetivo é ser sua primeira escolha em automação de portões</b>, construindo relações de <b>confiança e satisfação duradouras</b>, com base na excelência dos nossos serviços e no cuidado em cada atendimento.</p>   
              <ul className={styles.ulNossosValores}>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><Check size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}>Atendimento personalizado: vamos até você, com <b>agilidade e sem custo de visita</b>.</p></li>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><ShieldCheck size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}><b>Garantia nos serviços:</b> Garantimos nossos serviços com responsabilidade e transparência.</p></li>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><Handshake size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}>Compromisso com o cliente: foco total na <b>sua tranquilidade e satisfação</b>.</p></li>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><Scale size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}><b>Preço justo:</b> transparência e acessibilidade em todos os serviços.</p></li>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><Wrench size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}>Excelência técnica: soluções bem feitas, com <b>marcas reconhecidas e profissionais capacitados</b>.</p></li>
                <li className={styles.iconAndParagraphNossaMeValoBlock}><Zap size={26} className={styles.icons}/><p className={styles.paragraNossaMeValores}><b>Rapidez e eficiência:</b> serviço ágil, sem perder a <b>qualidade</b>.</p></li>
            </ul>
            <span onClick={handleRedirectWhatsapp} className={styles.spanCta}>PRECISOU? CHAMA A DELORIAN.</span>
          </div>
        </div>
      </div>
    </div>
  )
}