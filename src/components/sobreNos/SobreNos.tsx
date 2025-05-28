'use client';

import Image from "next/image";
import styles from "./StylesSobreNos.module.css";
import { Check, Hammer, Handshake, Heart, Radio, Rocket, Scale, Settings, Wrench } from "lucide-react";

export function SobreNos() {

  const phoneNumber = '+5541985011909';
  function handleRedirectWhatsapp () {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');
  };

  return(
    <div className={styles.sobreNosComponent}>
      <div className={styles.sobreNosContainer}>
        <div className={styles.titleSobreNosContainer}>
          <Image
            src={'/assets/iconD.svg'}
            width={30}
            height={94}
            alt={'raio azul'}
            className={styles.iconD}
          />
          <h2 className={styles.titleSobreNos}>Sobre a Delorian</h2>
        </div>

      <div className={styles.infoContainer}>
          <div className={styles.quemSomosContainer}>
            <div className={`${styles.titleContents} ${styles.titleContentQuemSomos}`}>
              <Image 
                src={'/assets/mascoteFace2.webp'}
                width={200}
                height={192} alt={"Rosto do mascote da Delorian que é uma rapoza de desenho"} className={styles.mascoteFace}             />
              <h3 className={styles.titleContentQuemSomos}>Quem somos</h3>
            </div>
            <div>
              <p className={styles.paragra}>A Delorian nasceu com o propósito de oferecer soluções modernas, seguras e acessíveis para quem precisa automatizar ou manter seu portão eletrônico. Oferecemos um atendimento ágil, técnico e comprometido com a sua satisfação.
              Somos especializados em:
            </p>
              <ul>
                <li className={`${styles.iconAndText} ${styles.iconAndTextFirstBlock}`}><Wrench size={40} className={styles.icons}/><p className={styles.paragra}><b>Instalação</b></p></li>
                <li className={`${styles.iconAndText} ${styles.iconAndTextFirstBlock}`}><Settings size={40} className={styles.icons}/><p className={styles.paragra}><b>Manutenção</b></p></li>
                <li className={`${styles.iconAndText} ${styles.iconAndTextFirstBlock}`}><Hammer size={40} className={styles.icons}/><p className={styles.paragra}><b>Conserto de motores para portões basculantes, pivotantes e deslizantes</b></p></li>
                <li className={`${styles.iconAndText} ${styles.iconAndTextFirstBlock}`}><Radio size={40} className={styles.icons}/><p className={styles.paragra}><b>Cadastro de controles</b></p></li>
              </ul>
              <p className={styles.paragra}>Trabalhamos com as principais marcas do mercado, como PPA, Rossi, Peccinin, Garen, Intelbras e Nice, priorizando qualidade, segurança e confiabilidade.</p>
            </div>
          </div>
          <div className={styles.nossosValoresContainer}>
            <div className={styles.titleContents}><Heart size={70} fill="#0311FE" color="#0311FE" className={styles.heartIcon}/><h3>Nossos valores e Princípios</h3></div>
            <ul>
              <li className={`${styles.iconAndText} ${styles.iconAndTextSecondBlock}`}><Check size={40} className={styles.icons}/><p className={styles.paragra}>Atendimento personalizado: vamos até você, com <b>agilidade e sem custo de visita</b>.</p></li>
              <li className={`${styles.iconAndText} ${styles.iconAndTextSecondBlock}`}><Handshake size={40} className={styles.icons}/><p className={styles.paragra}>Compromisso com o cliente: foco total na <b>sua tranquilidade e satisfação</b>.</p></li>
              <li className={`${styles.iconAndText} ${styles.iconAndTextSecondBlock}`}><Scale size={40} className={styles.icons}/><p className={styles.paragra}><b>Preço justo:</b> transparência e acessibilidade em todos os serviços.</p></li>
              <li className={`${styles.iconAndText} ${styles.iconAndTextSecondBlock}`}><Wrench size={40} className={styles.icons}/><p className={styles.paragra}>Excelência técnica: soluções bem feitas, com <b>marcas reconhecidas e profissionais capacitados</b>.</p></li>
              <li className={`${styles.iconAndText} ${styles.iconAndTextSecondBlock}`}><Rocket size={40} className={styles.icons}/><p className={styles.paragra}><b>Rapidez e eficiência:</b> serviço ágil, sem perder a <b>qualidade</b>.</p></li>
            </ul>
            <span onClick={handleRedirectWhatsapp} className={`${styles.paragra} ${styles.spanCta}`}>Precisou? Chama a Delorian.</span>
          </div>
        </div>
      </div>
    </div>
  )
}