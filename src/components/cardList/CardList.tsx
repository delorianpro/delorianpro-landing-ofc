'use client'

import Image from "next/image";
import styles from "./StylesCardList.module.css";

export function CardList () {
  return (
    <div className={styles.cardListContainer} >
       <div className={styles.titleContainer}>
        <Image 
          src={"/assets/raioAzul.png"} 
          width={30} height={94} 
          alt={"raio na cor azul"} 
          className={styles.raioAzul}/>
        <h2 className={styles.title}>Pague com</h2>
      </div>
      <div className={styles.wrapper}>
          <Image className={`${styles.item} ${styles.item1}`} src={"/assets/pix.svg"} alt={'pix'} width={300} height={111} />
          <Image className={`${styles.item} ${styles.item2}`} src={"/assets/visa.svg"} alt={'visa'} width={300} height={96} />
          <Image className={`${styles.item} ${styles.item3}`} src={"/assets/visaElectron.svg"} alt={'visa electron'} width={300} height={137} />
          <Image className={`${styles.item} ${styles.item4}`} src={"/assets/mastercard.svg"} alt={'mastercard' }width={202} height={150} />
          <Image className={`${styles.item} ${styles.item5}`} src={"/assets/maestro.svg"} alt={'maestro'} width={198} height={150} />
          <Image className={`${styles.item} ${styles.item6}`} src={"/assets/applePay.svg"} alt={'apple pay'} width={300} height={138} />
          <Image className={`${styles.item} ${styles.item7}`} src={"/assets/aproxCard.svg"} alt={'aproximação de cartão'} width={250} height={150} />
        </div>
        <div className={styles.wrapper2}>
          <Image className={`${styles.itemW2} ${styles.item8}`} src={"/assets/gPay.svg"} alt={'google pay'} width={300} height={132} />
          <Image className={`${styles.itemW2} ${styles.item9}`}src={"/assets/hiper.svg"} alt={'hiper'} width={255} height={150} />
          <Image className={`${styles.itemW2} ${styles.item10}`}src={"/assets/hipercard.svg"} alt={'hipercard'} width={300} height={138} />
          <Image className={`${styles.itemW2} ${styles.item11}`}src={"/assets/sPay.svg"} alt={'samsung pay'} width={213} height={150} />
          <Image className={`${styles.itemW2} ${styles.item12}`}src={"/assets/elo.svg"} alt={'elo' }width={300} height={136} />
          <Image className={`${styles.itemW2} ${styles.item13}`}src={"/assets/americanExpress.svg"} alt={'american express'} width={244} height={150} />
          <Image className={`${styles.itemW2} ${styles.item14}`}src={"/assets/aproxCard.svg"} alt={'aproximação de cartão'} width={250} height={150} />
        </div>
    </div>
  )
};