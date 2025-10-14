'use client'

import Image from "next/image";
import styles from "./StylesHeroSection.module.css"
import Link from "next/link";
import { useModal } from "../context/ModalContext";
import { solucoes } from "../servicosDelorian/ServicosDelorian";


export function HeroSection(){

const { abrirModal } = useModal();


  const phoneNumber = '+5541985011909'; 
  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');   
  }

 return(
  <div className={styles.heroComponent}>
    <div className={styles.heroContent}>
      <div className={styles.heroColumnLeft}>
      <div className={styles.heroColumnBlockTexts}>
        <p className={styles.heroHeadline}><span className={styles.spanHeadline}>A Delorian te ajuda com:</span> <br /> <b className={styles.textBold}>Alarmes, Interfones,<br /> Portas sociais, <br />Travas antiarrombamento,<br /> Sensores, Cancelas, <br /> Portões automáticos <br /> e muito mais...</b></p>
      </div>
      <div className={styles.divSpanBtn}>
      <span className={styles.heroSpan}>A gente cuida de tudo para você.</span>
      <button onClick={handleClickMakeBudget} className={styles.button}>Fazer orçamento</button>
      </div>
      <button onClick={handleClickMakeBudget} className={styles.mascoteBtn}> <Image 
            src="/assets/mascote.webp"
            alt={"Raposa preta com a camisa da delorian"}
            width={275} 
            height={345} 
            priority={true}
            className={styles.mascote}
          /></button>
    </div>
    <div className={styles.heroColumnRight}>
      <div>
        <h3 className={styles.heroColumnRightTitles}>CUIDAMOS DA SUA EMPRESA</h3>
        <div className={styles.heroColumnRightBlocks}>
          <div className={styles.heroColumnRightListItens}> <Link href={"#"} onClick={() => abrirModal(solucoes.find(solucoes=> solucoes.title.includes("Controle de acesso"))!)} className={styles.heroColumnRightListLink}><Image src="/assets/cadeBlueIcon.webp" alt={"Ícone de um cadeado na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinks}/>Controle de <br /> acesso</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#servicosDelorianId"} className={styles.heroColumnRightListLink}><Image src="/assets/portSoBlueIcon.webp" alt={"Ícone de uma porta na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinks}/>Porta <br />social</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#servicosDelorianId"} className={styles.heroColumnRightListLink}><Image src="/assets/alarmIcon.webp" alt={"Ícone de uma sirene na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinks}/>Alarmes</Link></div>
        </div>
      </div>
      <div>
        <h3 className={styles.heroColumnRightTitles}>CUIDAMOS DO SEU CONDOMÍNIO</h3>
        <div className={styles.heroColumnRightBlocks}>
          <div className={styles.heroColumnRightListItens}> <Link href={"#servicosDelorianId"} className={styles.heroColumnRightListLink}><Image src="/assets/cancelIcon2.webp" alt={"Ícone de uma cancela na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid2}/>Cancela</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#servicosDelorianId"} className={styles.heroColumnRightListLink}><Image src="/assets/interfoneIcon.webp" alt={"Ícone de um interfone na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid2}/>Interfones</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#plansDelorianId"} className={styles.heroColumnRightListLink}><Image src="/assets/filesBlueIcon.webp" alt={"Ícone de um papel na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid2}/>Planos</Link></div>
        </div>
      </div>
       <div>
        <h3 className={styles.heroColumnRightTitles}>CUIDAMOS DA SUA CASA</h3>
        <div className={`${styles.heroColumnRightBlocks} ${styles.heroColumnRightBlocksLast}`}>
          <div className={styles.heroColumnRightListItens}> <Link href={"#"} onClick={() => abrirModal(solucoes.find(s => s.title.includes("Módulo Wi-fi"))!)} className={styles.heroColumnRightListLink}><Image src="/assets/modWifiIcon.webp" alt={"Ícone de rede de sinal na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid3}/>Módulo <br /> wi-fi</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#"} onClick={() => abrirModal(solucoes.find(s => s.title.includes("Sensores"))!)} className={styles.heroColumnRightListLink}><Image src="/assets/escudBlueIcon.webp" alt={"Ícone de um escudo na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid3}/>Sensores</Link></div>
          <div className={styles.heroColumnRightListItens}> <Link href={"#"} onClick={() => abrirModal(solucoes.find(s => s.title.includes("TX-Car"))!)} className={styles.heroColumnRightListLink}><Image src="/assets/carrBlueIcon.webp" alt={"Ícone de um carro na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid3}/>Tx-Car</Link></div>
          {/* <div className={styles.heroColumnRightListItens}> <button onClick={() => abrirModal(solucoes.find(s => s.title.includes("TX-Car"))!)} className={styles.heroColumnRightListLink}><Image src="/assets/carrBlueIcon.webp" alt={"Ícone de um carro na cor branca"} width={100} height={100} priority={true} className={styles.iconsLinksGrid3}/>Tx-Car</button></div> */}
        </div>
      </div>    
    </div>
    </div>
  </div>
 )
}