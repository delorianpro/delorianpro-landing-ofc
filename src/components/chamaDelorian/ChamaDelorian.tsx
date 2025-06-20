'use client'

import styles from "./StylesChamaDelorian.module.css";
import Image from "next/image";

export function ChamaDelorian() {
  return (
    <div className={styles.chamaDelorianContainer}>
      <div className={styles.motoChamaDelorianContainer}>
        <Image 
          src={"/assets/chamaDelorian.png"} 
          className={styles.chamaDeloriamImage} 
          alt="texto chama a delorian"
          width={3528}
          height={1541}
          />
        <Image 
          src={"/assets/moto.webp"} 
          className={styles.motoImg}
          alt="imagem de uma moto com design que remete a algo futurístico, com a logo da Delorian"
          width={1265}
          height={903}
          />
      </div>
    </div>
  )
};