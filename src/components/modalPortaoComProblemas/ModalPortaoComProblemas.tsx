'use client'

import Image from 'next/image';
import styles from './StylesModalPortaoComProblemas.module.css'
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';


interface Solucao {
  id: number;
  title: string;
  description: string;
  descriptionVideo: string;
  videoModal?: string;
  imagesThumbNail: { src: string; alt: string; width: number; height: number }[];
  iconLogoDelorian: { src: string; alt: string; width: number; height: number }[];
}
interface ModalProps {
  solucao: Solucao;
  modalAberto:boolean;
  onClose: () => void;
}
export function ModalPortaoComProblemas( { solucao, onClose, modalAberto }: ModalProps ){

    const [showAllDescription, setShowAllDescription] = useState(false);
    const phoneNumber = '+5541985011909'; 
    const handleClickTalkWithUs = () => {
    const message = "Olá! Vi informações sobre " + solucao.title + " no site e gostaria de saber mais detalhes."
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); 
  }
  useEffect(() => {
    let scrollY = 0;
    if (modalAberto) {
      scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
       // Garante que ao desmontar o modal a rolagem seja restaurada
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [modalAberto]);


  return(
    <div className={styles.modalPortaoComProbContainer} onClick={onClose}>
      <div className={styles.modalPortaoComProbContent}  onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalPortaoComProbVideo}>
          {solucao.videoModal && (
            <iframe
              width="480"
              height="854"
              src={solucao.videoModal}
              frameBorder="0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoPlay}
            >
            </iframe>)}
        </div>
        <div className={styles.modalPortaoComProbInfoBlock}>
          <div className={styles.modalPortaoComProbImageEtitle}>
            <Image
              className={styles.modalPortaoComProbImage}
              src={solucao.imagesThumbNail[0].src}
              alt={solucao.imagesThumbNail[0].alt}
              width={300}
              height={300}
            />
            
            <div className={styles.titleAndClose}><h3 className={styles.modalPortaoComProbTitle}>{solucao.title}</h3> {showAllDescription ? <ChevronDown color='white' className={showAllDescription ? styles.closeAllDescription : styles.hideCloseAllDescriptionBtn} onClick={()=> setShowAllDescription(!showAllDescription)}/> : <ChevronUp color='white' className={styles.closeAllDescription} onClick={()=> setShowAllDescription(!showAllDescription)}/>} </div>
          </div>
          <div className={styles.descEbtn}>
            <p className={showAllDescription ? styles.modalPortaoComProbAllDescription : styles.modalPortaoComProbDescription}>{solucao.descriptionVideo}
            <button className={ showAllDescription ? styles.btnLerMaisHide : styles.btnLerMais} onClick={() => setShowAllDescription(!showAllDescription)}>Ler mais...</button></p>
          </div>
          <button className={styles.modalPortaoComProbBtn} onClick={handleClickTalkWithUs}>Agendar visita gratuita</button>
        </div>
        <span className={styles.modalPortaoComProbBtnClose} onClick={onClose} ><X  size={14} strokeWidth={4}/></span>
      </div>
    </div>
  )
}