'use client'

import Image from "next/image";
import styles from "./StylesOrcamentoGratis.module.css";

export function Orcamento() {
  const phoneNumber = '+5541985011909'; 
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
       <div className={styles.orcamentoContainer}>
        <Image 
          src={"/assets/raioTranslucido.png"} 
          alt={"raio na cor cinza claro"}   
          width={1800}
          height={2500} 
          className={styles.imagemRaioTranslucido}    
          />
        <div className={styles.blocTextBotao}>
          <h2 className={styles.titulo}>Seu portão está com problemas?</h2>
          <p className={styles.contentOrcamento}>Vamos até você! <b>Orçamento rápido e gratuito</b>. Fale conosco pelo whatsApp.</p>
          <button onClick={handleClickTalkWithUs} className={styles.botaoFaleConosco}>FALE CONOSCO</button>
        </div>
    </div>
  )
};