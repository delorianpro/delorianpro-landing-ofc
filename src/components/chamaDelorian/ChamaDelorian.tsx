'use client'

import styles from "./StylesChamaDelorian.module.css";
import Image from "next/image";

export function ChamaDelorian() {
  return (
    <div className={styles.chamaDelorianContainer}>
      <div className={styles.motoChamaDelorianContainer}>
        <Image 
          src={"/assets/chamaDelorian.svg"} 
          className={styles.chamaDeloriamImage} 
          alt="texto chama o delorian"
          width={300}
          height={126}
          />
        <Image 
          src={"/assets/moto.png"} 
          className={styles.motoImg}
          alt="imagem de uma moto com design que remete a algo futurístico com a logo da Delorian"
          width={1265}
          height={903}
          />
      </div>
    </div>
  )
};