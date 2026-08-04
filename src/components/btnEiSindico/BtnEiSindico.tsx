'use client'
import Link from "next/link";
import styles from "./StylesBtnEiSindico.module.css";

export function BtnEiSindico() {
  return(
    <div className={styles.componentBtnEiSindico}>
      <Link className={styles.btnEiSindico} href={"#bannerSindico-sessao"} >
        <span className={styles.iconeHand}>👉</span>
        <span className={styles.textEiSindico}>Ei, <b>Síndico</b>! Clique aqui.</span>
      </Link>
    </div>
  )
}