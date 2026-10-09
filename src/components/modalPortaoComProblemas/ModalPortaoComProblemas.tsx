'use client'

import Image from 'next/image';
import styles from './StylesModalPortaoComProblemas.module.css'
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Ellipsis, Link2, Mail, Share2, X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

type SwipePhase = 'idle' | 'dragging' | 'resetting' | 'exiting' | 'entering';
type ShareSheetMotionPhase = 'idle' | 'dragging' | 'resetting' | 'closing';

const SWIPE_THRESHOLD = 60;
const SWIPE_TRANSITION_MS = 210;
const SHARE_SHEET_CLOSE_THRESHOLD = 88;
const SHARE_SHEET_TRANSITION_MS = 240;
const SHARED_SERVICE_QUERY_PARAM = 'servico';

const summarizeDescription = (description: string, maxLength = 180) => {
  const normalizedDescription = description.replace(/\s+/g, ' ').trim();

  if (normalizedDescription.length <= maxLength) return normalizedDescription;

  const shortenedDescription = normalizedDescription.slice(0, maxLength - 3);
  const lastSpaceIndex = shortenedDescription.lastIndexOf(' ');

  return `${shortenedDescription.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : undefined)}...`;
};

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
    const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);
    const [shareUrl, setShareUrl] = useState('');
    const [copyFeedback, setCopyFeedback] = useState('');
    const [shareSheetOffset, setShareSheetOffset] = useState(0);
    const [shareSheetMotionPhase, setShareSheetMotionPhase] = useState<ShareSheetMotionPhase>('idle');
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const touchAxis = useRef<'pending' | 'horizontal' | 'vertical'>('pending');
    const suppressVideoClick = useRef(false);
    const videoRef = useRef<HTMLIFrameElement | null>(null);
    const shareButtonRef = useRef<HTMLButtonElement | null>(null);
    const shareSheetRef = useRef<HTMLElement | null>(null);
    const shareSheetPointerId = useRef<number | null>(null);
    const shareSheetDragStartY = useRef<number | null>(null);
    const shareSheetOffsetRef = useRef(0);
    const shouldResumeVideoAfterShare = useRef(false);
    const isNavigating = useRef(false);
    const exitTimer = useRef<number | null>(null);
    const enterTimer = useRef<number | null>(null);
    const resetTimer = useRef<number | null>(null);
    const copyFeedbackTimer = useRef<number | null>(null);
    const shareSheetMotionTimer = useRef<number | null>(null);
    const activeSolucao = solucoes[activeIndex] ?? solucao;
    const activeVideoSource = activeSolucao.videoModal
      ? `${activeSolucao.videoModal}${activeSolucao.videoModal.includes('?') ? '&' : '?'}enablejsapi=1&playsinline=1`
      : undefined;
    const hasPrevious = activeIndex > 0;
    const hasNext = activeIndex < solucoes.length - 1;
    const shareTitle = activeSolucao.title;
    const shareDescription = summarizeDescription(activeSolucao.descriptionVideo);
    const shareText = `${shareTitle}\n${shareDescription}`;
    const phoneNumber = '+5541985011909'; 
    const handleClickTalkWithUs = () => {
    const message = "Olá! Vi informações sobre " + activeSolucao.title + " no site e gostaria de saber mais detalhes."
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); 
  }

  const getShareUrl = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set(SHARED_SERVICE_QUERY_PARAM, String(activeSolucao.id));
    url.hash = '';
    return url.toString();
  }, [activeSolucao.id]);

  const sendVideoCommand = useCallback((command: 'pauseVideo' | 'playVideo') => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      'https://www.youtube.com'
    );
  }, []);

  const resetShareSheetMotion = useCallback(() => {
    if (shareSheetMotionTimer.current) window.clearTimeout(shareSheetMotionTimer.current);
    shareSheetPointerId.current = null;
    shareSheetDragStartY.current = null;
    shareSheetOffsetRef.current = 0;
    setShareSheetOffset(0);
    setShareSheetMotionPhase('idle');
  }, []);

  const closeShareSheet = useCallback(() => {
    const shouldResumeVideo = shouldResumeVideoAfterShare.current;
    shouldResumeVideoAfterShare.current = false;
    resetShareSheetMotion();
    if (copyFeedbackTimer.current) window.clearTimeout(copyFeedbackTimer.current);
    copyFeedbackTimer.current = null;
    setIsShareSheetOpen(false);
    setCopyFeedback('');

    if (shouldResumeVideo) {
      sendVideoCommand('playVideo');
      setIsVideoPlaying(true);
    }

    window.requestAnimationFrame(() => shareButtonRef.current?.focus());
  }, [resetShareSheetMotion, sendVideoCommand]);

  const openShareSheet = () => {
    if (!window.matchMedia('(max-width: 900px)').matches || isShareSheetOpen) return;

    shouldResumeVideoAfterShare.current = isVideoPlaying;
    if (isVideoPlaying) {
      sendVideoCommand('pauseVideo');
      setIsVideoPlaying(false);
    }

    setShareUrl(getShareUrl());
    setCopyFeedback('');
    resetShareSheetMotion();
    setIsShareSheetOpen(true);
  };

  const showShareFeedback = (message: string) => {
    setCopyFeedback(message);
    if (copyFeedbackTimer.current) window.clearTimeout(copyFeedbackTimer.current);
    copyFeedbackTimer.current = window.setTimeout(() => {
      setCopyFeedback('');
      copyFeedbackTimer.current = null;
    }, 3200);
  };

  const handleCopyLink = async () => {
    const url = shareUrl || getShareUrl();
    const copyWithTextArea = () => {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.readOnly = true;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand('copy');
      textArea.remove();

      if (!copied) throw new Error('Copy command failed');
    };

    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(url);
        } catch {
          copyWithTextArea();
        }
      } else {
        copyWithTextArea();
      }

      showShareFeedback('Link copiado!');
    } catch {
      showShareFeedback('Não foi possível copiar o link.');
    }
  };

  const handleNativeShare = () => {
    const url = shareUrl || getShareUrl();

    if (typeof navigator.share !== 'function') {
      showShareFeedback('Compartilhamento nativo não suportado neste navegador.');
      return;
    }

    navigator.share({
      title: shareTitle,
      text: shareDescription,
      url,
    })
      .then(closeShareSheet)
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === 'AbortError') {
          closeShareSheet();
          return;
        }
        showShareFeedback('Não foi possível abrir o compartilhamento.');
      });
  };

  const handleShareSheetPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;

    if (shareSheetMotionTimer.current) window.clearTimeout(shareSheetMotionTimer.current);
    shareSheetPointerId.current = event.pointerId;
    shareSheetDragStartY.current = event.clientY;
    shareSheetOffsetRef.current = 0;
    setShareSheetOffset(0);
    setShareSheetMotionPhase('dragging');
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const handleShareSheetPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shareSheetPointerId.current !== event.pointerId || shareSheetDragStartY.current === null) return;

    const nextOffset = Math.max(0, event.clientY - shareSheetDragStartY.current);
    shareSheetOffsetRef.current = nextOffset;
    setShareSheetOffset(nextOffset);
    event.preventDefault();
  };

  const releaseShareSheetPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    shareSheetPointerId.current = null;
    shareSheetDragStartY.current = null;
  };

  const returnShareSheetToStart = () => {
    shareSheetOffsetRef.current = 0;
    setShareSheetMotionPhase('resetting');
    setShareSheetOffset(0);

    if (shareSheetMotionTimer.current) window.clearTimeout(shareSheetMotionTimer.current);
    shareSheetMotionTimer.current = window.setTimeout(() => {
      setShareSheetMotionPhase('idle');
    }, SHARE_SHEET_TRANSITION_MS);
  };

  const handleShareSheetPointerEnd = (event: React.PointerEvent<HTMLElement>) => {
    if (shareSheetPointerId.current !== event.pointerId) return;

    const shouldClose = shareSheetOffsetRef.current >= SHARE_SHEET_CLOSE_THRESHOLD;
    releaseShareSheetPointer(event);

    if (!shouldClose) {
      returnShareSheetToStart();
      return;
    }

    const sheetHeight = shareSheetRef.current?.offsetHeight ?? window.innerHeight * 0.4;
    setShareSheetMotionPhase('closing');
    setShareSheetOffset(sheetHeight + 24);

    if (shareSheetMotionTimer.current) window.clearTimeout(shareSheetMotionTimer.current);
    shareSheetMotionTimer.current = window.setTimeout(closeShareSheet, SHARE_SHEET_TRANSITION_MS);
  };

  const handleShareSheetPointerCancel = (event: React.PointerEvent<HTMLElement>) => {
    if (shareSheetPointerId.current !== event.pointerId) return;
    releaseShareSheetPointer(event);
    returnShareSheetToStart();
  };

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
    sendVideoCommand(command);
    setIsVideoPlaying((playing) => !playing);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isShareSheetOpen) closeShareSheet();
        else onClose();
        return;
      }

      if (isShareSheetOpen) return;

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
  }, [activeIndex, closeShareSheet, hasNext, hasPrevious, isShareSheetOpen, navigateTo, onClose]);

  useEffect(() => {
    if (!isShareSheetOpen) return;

    shareSheetRef.current?.focus();
    const mobileMediaQuery = window.matchMedia('(max-width: 900px)');
    const closeWhenLeavingMobile = (event: MediaQueryListEvent) => {
      if (!event.matches) closeShareSheet();
    };

    mobileMediaQuery.addEventListener('change', closeWhenLeavingMobile);
    return () => mobileMediaQuery.removeEventListener('change', closeWhenLeavingMobile);
  }, [closeShareSheet, isShareSheetOpen]);

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
      if (copyFeedbackTimer.current) window.clearTimeout(copyFeedbackTimer.current);
      if (shareSheetMotionTimer.current) window.clearTimeout(shareSheetMotionTimer.current);
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


  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareTitle = encodeURIComponent(shareTitle);
  const shareSheetMotionClass = shareSheetMotionPhase === 'dragging'
    ? styles.mobileShareSheetDragging
    : shareSheetMotionPhase === 'resetting'
      ? styles.mobileShareSheetResetting
      : shareSheetMotionPhase === 'closing'
        ? styles.mobileShareSheetClosing
        : '';

  return(
    <>
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

        <button
          ref={shareButtonRef}
          type="button"
          className={styles.mobileShareButton}
          onClick={openShareSheet}
          onTouchStart={(event) => event.stopPropagation()}
          aria-label={`Compartilhar ${activeSolucao.title}`}
          aria-haspopup="dialog"
          aria-expanded={isShareSheetOpen}
        >
          <Share2 aria-hidden="true" />
        </button>

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
    {isShareSheetOpen && typeof document !== 'undefined' && createPortal(
      <div className={styles.mobileShareOverlay} onClick={closeShareSheet}>
        <section
          ref={shareSheetRef}
          className={`${styles.mobileShareSheet} ${shareSheetMotionClass}`}
          style={{ transform: `translate3d(0, ${shareSheetOffset}px, 0)` }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-share-title"
          tabIndex={-1}
          onClick={(event) => event.stopPropagation()}
        >
          <header
            className={styles.mobileShareDragArea}
            onPointerDown={handleShareSheetPointerDown}
            onPointerMove={handleShareSheetPointerMove}
            onPointerUp={handleShareSheetPointerEnd}
            onPointerCancel={handleShareSheetPointerCancel}
          >
            <span className={styles.mobileShareHandle} aria-hidden="true" />
            <h2 id="mobile-share-title" className={styles.mobileShareTitle}>Compartilhar</h2>
          </header>

          <div className={styles.mobileShareOptions}>
            <a
              className={styles.mobileShareOption}
              href={`https://wa.me/?text=${encodedShareText}%0A${encodedShareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeShareSheet}
            >
              <span className={`${styles.mobileShareOptionIcon} ${styles.whatsappShareIcon}`}><FaWhatsapp aria-hidden="true" /></span>
              <span>WhatsApp</span>
            </a>

            <a
              className={styles.mobileShareOption}
              href={`https://t.me/share/url?url=${encodedShareUrl}&text=${encodedShareText}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeShareSheet}
            >
              <span className={`${styles.mobileShareOptionIcon} ${styles.telegramShareIcon}`}><FaTelegramPlane aria-hidden="true" /></span>
              <span>Telegram</span>
            </a>

            <a
              className={styles.mobileShareOption}
              href={`mailto:?subject=${encodedShareTitle}&body=${encodedShareText}%0A%0A${encodedShareUrl}`}
              onClick={closeShareSheet}
            >
              <span className={`${styles.mobileShareOptionIcon} ${styles.emailShareIcon}`}><Mail aria-hidden="true" /></span>
              <span>E-mail</span>
            </a>

            <button type="button" className={styles.mobileShareOption} onClick={handleCopyLink}>
              <span className={`${styles.mobileShareOptionIcon} ${styles.copyShareIcon}`}>
                {copyFeedback === 'Link copiado!' ? <Check aria-hidden="true" /> : <Link2 aria-hidden="true" />}
              </span>
              <span>{copyFeedback === 'Link copiado!' ? 'Copiado' : 'Copiar link'}</span>
            </button>

            <button type="button" className={styles.mobileShareOption} onClick={handleNativeShare}>
              <span className={`${styles.mobileShareOptionIcon} ${styles.moreShareIcon}`}><Ellipsis aria-hidden="true" /></span>
              <span>Mais opções</span>
            </button>
          </div>

          <p className={styles.mobileShareFeedback} aria-live="polite">{copyFeedback}</p>
          <button type="button" className={styles.mobileShareCancel} onClick={closeShareSheet}>Cancelar</button>
        </section>
      </div>,
      document.body
    )}
    </>
  )
}
