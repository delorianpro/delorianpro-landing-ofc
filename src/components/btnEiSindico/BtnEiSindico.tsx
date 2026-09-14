'use client'
import Link from "next/link";
import styles from "./StylesBtnEiSindico.module.css";

export function BtnEiSindico() {
  const handleBannerClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("banner-sindico-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  };

  return(
    <div className={styles.componentBtnEiSindico}>
      <Link
        className={styles.btnEiSindico}
        href={"#banner-sindico-content"}
        onClick={handleBannerClick}
      >
        <span className={styles.iconeHand}>👉</span>
        <span className={styles.textEiSindico}>Ei, <b>Síndico</b>! Clique aqui.</span>
      </Link>
    </div>
  )
}
