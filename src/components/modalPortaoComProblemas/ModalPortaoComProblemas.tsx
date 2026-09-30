'use client'

import Image from 'next/image';
import styles from './StylesModalPortaoComProblemas.module.css'
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from 'lucide-react';

type SwipePhase = 'idle' | 'dragging' | 'resetting' | 'exiting' | 'entering';

const SWIPE_THRESHOLD = 60;
const SWIPE_TRANSITION_MS = 210;

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
  solucoes: Solucao[];
  modalAberto:boolean;
  onClose: () => void;
}
export function ModalPortaoComProblemas( { solucao, solucoes, onClose, modalAberto }: ModalProps ){

    const [showAllDescription, setShowAllDescription] = useState(false);
    const [activeIndex, setActiveIndex] = useState(() => {
      const selectedIndex = solucoes.findIndex((item) => item.id === solucao.id);
      return selectedIndex >= 0 ? selectedIndex : 0;
    });
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [swipeOffset, setSwipeOffset] = useState(0);
    const [swipePhase, setSwipePhase] = useState<SwipePhase>('idle');
    const [swipeDirection, setSwipeDirection] = useState<1 | -1>(1);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const touchAxis = useRef<'pending' | 'horizontal' | 'vertical'>('pending');
    const suppressVideoClick = useRef(false);
    const videoRef = useRef<HTMLIFrameElement | null>(null);
    const isNavigating = useRef(false);
    const exitTimer = useRef<number | null>(null);
    const enterTimer = useRef<number | null>(null);
    const resetTimer = useRef<number | null>(null);
    const activeSolucao = solucoes[activeIndex] ?? solucao;
    const activeVideoSource = activeSolucao.videoModal
      ? `${activeSolucao.videoModal}${activeSolucao.videoModal.includes('?') ? '&' : '?'}enablejsapi=1&playsinline=1`
      : undefined;
    const hasPrevious = activeIndex > 0;
    const hasNext = activeIndex < solucoes.length - 1;
    const phoneNumber = '+5541985011909'; 
    const handleClickTalkWithUs = () => {
    const message = "Olá! Vi informações sobre " + activeSolucao.title + " no site e gostaria de saber mais detalhes."
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); 
  }

  const navigateTo = useCallback((nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= solucoes.length || isNavigating.current) return;

    const direction: 1 | -1 = nextIndex > activeIndex ? 1 : -1;
    const isMobileViewport = window.matchMedia('(max-width: 900px)').matches;

    if (isMobileViewport) {
      isNavigating.current = true;
      setSwipeDirection(direction);
      setSwipePhase('exiting');
      setSwipeOffset(-direction * Math.min(window.innerWidth * 0.28, 110));

      if (resetTimer.current) window.clearTimeout(resetTimer.current);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      if (enterTimer.current) window.clearTimeout(enterTimer.current);

      exitTimer.current = window.setTimeout(() => {
        setShowAllDescription(false);
        setIsVideoPlaying(true);
        setActiveIndex(nextIndex);
        setSwipeOffset(0);
        setSwipePhase('entering');

        enterTimer.current = window.setTimeout(() => {
          setSwipePhase('idle');
          isNavigating.current = false;
        }, SWIPE_TRANSITION_MS);
      }, SWIPE_TRANSITION_MS);

      return;
    }

    setShowAllDescription(false);
    setIsVideoPlaying(true);
    setActiveIndex(nextIndex);
  }, [activeIndex, solucoes.length]);

  const handleVideoToggle = () => {
    if (suppressVideoClick.current) {
      suppressVideoClick.current = false;
      return;
    }

    const command = isVideoPlaying ? 'pauseVideo' : 'playVideo';
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      'https://www.youtube.com'
    );
    setIsVideoPlaying((playing) => !playing);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'ArrowLeft' && hasPrevious) {
        event.preventDefault();
        navigateTo(activeIndex - 1);
      }

      if (event.key === 'ArrowRight' && hasNext) {
        event.preventDefault();
        navigateTo(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, hasNext, hasPrevious, navigateTo, onClose]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isNavigating.current) return;

    const touch = event.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchAxis.current = 'pending';
    suppressVideoClick.current = false;
    setSwipePhase('dragging');
    setSwipeOffset(0);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current || isNavigating.current) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    if (touchAxis.current === 'pending' && Math.hypot(deltaX, deltaY) >= 8) {
      touchAxis.current = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
    }

    if (touchAxis.current !== 'horizontal') return;

    event.preventDefault();

    const isBlockedDirection = (deltaX > 0 && !hasPrevious) || (deltaX < 0 && !hasNext);
    const resistance = isBlockedDirection ? 0.12 : 0.34;
    const maxOffset = isBlockedDirection ? 24 : 90;
    const dampedOffset = Math.max(-maxOffset, Math.min(maxOffset, deltaX * resistance));

    setSwipeOffset(dampedOffset);
  };

  const resetSwipePosition = () => {
    setSwipePhase('resetting');
    setSwipeOffset(0);

    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setSwipePhase('idle');
    }, SWIPE_TRANSITION_MS);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.hypot(deltaX, deltaY) > 10) {
      suppressVideoClick.current = true;
      window.setTimeout(() => {
        suppressVideoClick.current = false;
      }, 400);
    }

    const isHorizontalGesture = touchAxis.current === 'horizontal' && Math.abs(deltaX) > Math.abs(deltaY);
    touchAxis.current = 'pending';

    if (!isHorizontalGesture || Math.abs(deltaX) < SWIPE_THRESHOLD) {
      resetSwipePosition();
      return;
    }

    if (deltaX > 0 && hasPrevious) navigateTo(activeIndex - 1);
    else if (deltaX < 0 && hasNext) navigateTo(activeIndex + 1);
    else resetSwipePosition();
  };

  useEffect(() => {
    return () => {
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      if (enterTimer.current) window.clearTimeout(enterTimer.current);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

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

  const swipeAnimationClass = swipePhase === 'dragging'
    ? styles.swipeDragging
    : swipePhase === 'resetting'
      ? styles.swipeResetting
      : swipePhase === 'exiting'
        ? styles.swipeExiting
        : swipePhase === 'entering'
          ? (swipeDirection === 1 ? styles.swipeEnteringNext : styles.swipeEnteringPrevious)
          : '';

  const swipeOpacity = swipePhase === 'exiting'
    ? 0.35
    : Math.max(0.84, 1 - Math.abs(swipeOffset) / 560);


  return(
    <div className={styles.modalPortaoComProbContainer} onClick={onClose}>
      <div className={styles.modalNavigationShell} onClick={(e) => e.stopPropagation()}>
        {hasPrevious && (
          <button
            type="button"
            className={`${styles.navigationButton} ${styles.navigationButtonPrevious}`}
            onClick={() => navigateTo(activeIndex - 1)}
            aria-label="Ver publicação anterior"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
        )}

      <div
        key={activeSolucao.id}
        className={`${styles.modalPortaoComProbContent} ${styles.contentTransition} ${swipeAnimationClass}`}
        style={{
          '--swipe-offset': `${swipeOffset}px`,
          '--swipe-opacity': swipeOpacity,
        } as React.CSSProperties}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStart.current = null;
          touchAxis.current = 'pending';
          suppressVideoClick.current = true;
          resetSwipePosition();
          window.setTimeout(() => {
            suppressVideoClick.current = false;
          }, 400);
        }}
        role="dialog"
        aria-modal="true"
        aria-label={activeSolucao.title}
      >
        <div className={styles.modalPortaoComProbVideo}>
          {activeSolucao.videoModal && (
            <iframe
              key={activeSolucao.id}
              ref={videoRef}
              width="480"
              height="854"
              src={activeVideoSource}
              frameBorder="0"
              title={`Vídeo: ${activeSolucao.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoPlay}
            >
            </iframe>)}
          <button
            type="button"
            className={styles.mobileSwipeSurface}
            onClick={handleVideoToggle}
            aria-label={isVideoPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          />
        </div>
        <div className={styles.modalPortaoComProbInfoBlock} onClick={() => setShowAllDescription(!showAllDescription)}>
          <div className={styles.modalPortaoComProbImageEtitle}>
            <div   className={styles.divPortaoComProbImage}>
                <Image
                  className={styles.modalPortaoComProbImage}
                  src={activeSolucao.imagesThumbNail[0].src}
                  alt={activeSolucao.imagesThumbNail[0].alt}
                  width={300}
                  height={300}
                />
            </div>
            <div className={styles.titleAndClose}><h3 className={styles.modalPortaoComProbTitle}>{activeSolucao.title}</h3> {showAllDescription ? <ChevronDown color='white' className={showAllDescription ? styles.closeAllDescription : styles.hideCloseAllDescriptionBtn} onClick={()=> setShowAllDescription(!showAllDescription)}/> : <ChevronUp color='white' className={styles.closeAllDescription} onClick={()=> setShowAllDescription(!showAllDescription)}/>} </div>
          </div>
          <div className={styles.descEbtn}>
            <p className={showAllDescription ? styles.modalPortaoComProbAllDescription : styles.modalPortaoComProbDescription}>{activeSolucao.descriptionVideo}
            <button className={ showAllDescription ? styles.btnLerMaisHide : styles.btnLerMais} onClick={() => setShowAllDescription(!showAllDescription)}>Ler mais...</button></p>
          </div>
          <div className={styles.desktopCtaArea}>
            <span className={styles.desktopPublicationIndicator} aria-live="polite">
              {activeIndex + 1} / {solucoes.length}
            </span>
            <button className={styles.modalPortaoComProbBtn} onClick={handleClickTalkWithUs}>Agendar visita gratuita</button>
          </div>
        </div>
        <span className={styles.modalPortaoComProbBtnClose} onClick={onClose} ><X  size={14} strokeWidth={4}/></span>

        <nav className={styles.mobileNavigationFooter} aria-label="Navegação entre publicações">
          {hasPrevious && (
            <button
              type="button"
              className={`${styles.mobileNavigationButton} ${styles.mobileNavigationPrevious}`}
              onClick={() => navigateTo(activeIndex - 1)}
              aria-label="Ver publicação anterior"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
          )}

          <span className={styles.mobilePublicationIndicator} aria-live="polite">
            {activeIndex + 1} / {solucoes.length}
          </span>

          {hasNext && (
            <button
              type="button"
              className={`${styles.mobileNavigationButton} ${styles.mobileNavigationNext}`}
              onClick={() => navigateTo(activeIndex + 1)}
              aria-label="Ver próxima publicação"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          )}
        </nav>

      </div>

        {hasNext && (
          <button
            type="button"
            className={`${styles.navigationButton} ${styles.navigationButtonNext}`}
            onClick={() => navigateTo(activeIndex + 1)}
            aria-label="Ver próxima publicação"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
