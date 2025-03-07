'use client'
import Image from "next/image";
import styles from "./StylesMarcasParceiras.module.css";

export function MarcasParceiras() {
  return( 
    <div className={styles.marcasParceirasContainer}>
       <Image 
        src={"/assets/backgroundAzul.png"} 
        alt={"Retângulo azul escuro"}
        className={styles.backgroundImage} 
        width={1920} 
        height={666}
        />
        <div className={styles.titleEMarcas}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title} >Trabalhamos com as principais marcas</h3>
          </div>
          <div className={styles.blocoMarcas}>
            <Image src={"/assets/garen.png"} className={styles.garenLogo} alt={"Imagem do logotipo da Garen, marca de motores para portões automáticos com a qual a Delorian trabalha"} width={271} height={52}/>
            <Image src={"/assets/intelbras.png"} className={styles.intelbrasLogo} alt={"Imagem do logotipo da Intelbras, marca de motores para portões automáticos com a qual a Delorian trabalha"} width={244} height={47} />
            <Image src={"/assets/nice.png"} className={styles.niceLogo} alt={"Imagem do logotipo da Nice, marca de motores para portões automáticos com a qual a Delorian trabalha"}  width={194} height={68} />
            <Image src={"/assets/peccinin.png"} className={styles.peccininLogo} alt={"Imagem do logotipo da Peccinin, marca de motores para portões automáticos com a qual a Delorian trabalha"}  width={277} height={96} />
            <Image src={"/assets/ppa.png"} className={styles.ppaLogo} alt={"Imagem do logotipo da PPA, marca de motores para portões automáticos com a qual a Delorian trabalha"}  width={137} height={70} />
            <Image src={"/assets/rossi.png"} className={styles.rossiLogo} alt={"Imagem do logotipo da Rossi, marca de motores para portões automáticos com a qual a Delorian trabalha"}  width={208} height={45} />
          </div>
        </div>
    </div>
  )
}