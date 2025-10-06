'use client'

import Image from "next/image";
import styles from "./StylesServicosDelorian.module.css"
import { useEffect, useRef, useState } from "react";
import { ModalPortaoComProblemas } from "../modalPortaoComProblemas/ModalPortaoComProblemas";
import { Play } from "lucide-react";

interface Solucao {
  id: number;
  title: string;
  description: string;
  descriptionPrev: string;
  btnMais: string;
  descriptionVideo: string;
  imagesThumbNail: { src: string; alt: string; width: number; height: number }[];
  videoModal?: string;
  gifHover: { src: string; alt: string; width: number; height: number }[];
  classname: string;
  iconLogoDelorian: { src: string; alt: string; width: number; height: number }[];
}

const solucoes: Solucao[] = [
  {
    id: 1,
    title: "Instalação de motor em portões",
    descriptionPrev: "Instalação especializada de motores para portões...",
    btnMais: "ler mais",
    description: "Instalação especializada de motores para portões deslizantes, basculantes e pivotantes.",
    descriptionVideo:"💥Chega de estresse com seu portão! Instalar um portão automático é a solução ideal para quem ainda utiliza portão manual. Além de oferecer mais segurança, praticidade e comodidade no dia a dia, o portão eletrônico valoriza o imóvel e facilita a entrada e saída sem esforço. Deixa que a Delorian automatiza pra você! Especialista em instalação de motores e automação de portões, oferecemos praticidade, segurança e tecnologia para o seu dia a dia. Atendimento rápido em Curitiba e região metropolitana, com orçamento grátis! ⚡😎",
    gifHover: [{ src: "/assets/gifInstalCompleta.gif", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 300 }],
    videoModal: "https://www.youtube.com/embed/3R8TNaBnBvs?si=Jb4Wt3HekY2yT31R&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbInstaMotor.webp", alt: "Imagem com o mascote da delorian, representado por uma raposa, apontando para um homem empurrando um portão", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
    
  },
  {
    id: 2,
    title: "Motor não funcionando",
    descriptionPrev: "Diagnóstico e reparos para motores de portões..",
    btnMais: "Ler mais",
    description: "Diagnóstico e reparos para motores de portões eletrônicos travados ou inoperantes.",
    descriptionVideo:"🔎 Quando um portão eletrônico para de funcionar, os motivos podem variar. Pode ser falha no controle remoto, problema na alimentação elétrica, desgaste no motor, mau contato nos componentes internos ou até a presença de insetos, como lagartixas, que podem causar curto ou atrapalhar o funcionamento.🦎 A presença de insetos é mais comum do que parece e pode comprometer o funcionamento de todo o sistema. A melhor forma de identificar a causa exata é fazer uma vistoria técnica no sistema.🔧 E essa visita é gratuita na Delorian.⚡",
    gifHover: [{ src: "/assets/gifMotorNaoFunciona.gif", alt: "Motor com erro", width: 360, height: 162 }],
    videoModal: "https://www.youtube.com/embed/YkD3h2FRr_Q?si=Yi6Kox-YgGN9F65s&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/tumbMotNFunciona.webp", alt: "Imagem do mascote da delorian, representado por uma raposa, demonstrando uma expressão de preocupação", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  { id: 3,
    title: "Motor sem força",
    descriptionPrev: "Correção de motores fracos por desgaste, sobrecarga ou...",
    btnMais: "Ler mais",
    description: "Correção de motores fracos por desgaste, sobrecarga ou falhas elétricas.",
    descriptionVideo:"⚠️ Após uma instabilidade de energia na rede elétrica, é comum que o motor do portão apresente perda de potência. Mas esse não é o único motivo: capacitor fraco, desgaste interno de peças, falha na placa eletrônica, falta de lubrificação ou até o desalinhamento do portão podem causar lentidão no sistema. A Delorian é especialista em instalação, manutenção e automação de portões, garantindo mais segurança, praticidade e o funcionamento perfeito para o seu dia a dia. 😁 Resolva a lentidão do seu portão com a Delorian agora! ⚡🚀🔧",
    gifHover: [{ src: "/assets/gifMotorSemForca.gif", alt: "Imagem de um motor de portão eletrônico com um ícone de octágono com exclamação, indicando falta de força.", width: 360, height: 162 }],
    videoModal: "https://www.youtube.com/embed/nJmgHx7SVTA?si=ZuL29PH4Qb3RZsYZ&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbMotSemFor.webp", alt: "Imagem de um homem olhando para o relógio em seu pulso e uma mulher parados esperando o portão abrir", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  {
    id: 4,
    title:"Motor indo só para um lado",
    descriptionPrev: "Ajustes para motores que só...",
    btnMais: "Ler mais",
    description: "Ajustes para motores que só se movem para um lado.",
    descriptionVideo:"Portão só abre ou só fecha? 🚪⚠️ Se o motor do seu portão eletrônico está funcionando apenas em uma direção, isso pode indicar diversos problemas. Entre as causas mais comuns estão:🔧 Placa eletrônica danificada ou com falha de programação;⚡ Instabilidade elétrica;🛠️ Fim de curso desajustado ou com mau contato;⚙️ Desgaste interno do motor;🔌 Fiação elétrica solta;🚪 Portão desalinhado ou pesado. A Delorian é especialista em conserto de motores para portão eletrônico. Chame a Delorian e aproveite: visita 100% gratuita!🚀",
    gifHover: [{ src: "/assets/gifIndoSoUmLado.gif", alt: "Imagem de um motor de portão eletrônico com um ícone de seta, indicando movimento unidirecional.", width: 360, height: 162 }],
    videoModal: "https://www.youtube.com/embed/3MJHkDv0WHU?si=eYXQvSCF9qaUtmEh&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbunidirecional.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  {
    id: 5,
    title:"Motor barulhento",
    descriptionPrev: "Soluções para motores barulhentos com ruídos...",
    btnMais: "Ler mais",
    description: "Soluções para motores barulhentos com ruídos de atrito, rangidos ou estalos.",
    descriptionVideo:"🔊🚪 Se o motor do seu portão eletrônico está barulhento, isso pode ser sinal de falta de lubrificação, rolamentos gastos, engrenagens danificadas, peças internas desgastadas ou até mau alinhamento do portão, que força todo o sistema. ⚠️ Ignorar o problema pode causar danos maiores e comprometer a segurança da sua casa. ✨ A Delorian é especialista em manutenção e instalação de portões eletrônicos, garantindo mais tranquilidade, praticidade e segurança para você.📍Atendemos Curitiba e região metropolitana com orçamento grátis. Chame a Delorian!⚡",
    gifHover: [{ src: "/assets/gifBarulhento.gif", alt: "Imagem de um motor de portão eletrônico com um ícone de megafone, indicando barulho.", width: 360, height: 162 }],
    videoModal: "https://www.youtube.com/embed/urIaG5wj3VM?si=Xrv7yZhCqbg9yxs7&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbPortBaru.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  {
    id: 6,
    title: "Portão batendo",
    descriptionPrev: "Soluções para portões que batem ao fechar...",
    btnMais: "Ler mais",
    description: "Soluções para portões que batem ao fechar, causando impactos excessivos e ruídos.",
    descriptionVideo:"🔇 Diga ADEUS ao barulho do portão batendo! Esse incômodo pode ser causado por falta de regulagem, molas ou amortecedores gastos, desalinhamento ou falha nos fins de curso. ✨ A solução definitiva é a Parada Suave, que garante um fechamento silencioso, seguro e duradouro. ⚡ Confira a explicação do nosso técnico e descubra como transformar o funcionamento do seu portão. 📍Atendemos Curitiba e região metropolitana com orçamento grátis. 🔧🚪 Chame a Delorian e tenha mais conforto e segurança com seu portão automático!🚪✨",
    gifHover: [{ src: "/assets/gifBatendo.gif", alt: "Imagem de um portão eletrônico com ondas, indicando batida", width: 360, height: 161 }],
    videoModal: "https://www.youtube.com/embed/eHohSzLFvdk?si=Pk8m5CWq79m8C-aN&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbPortBatend.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  {
    id: 7,
    title: "Cadastro de controle de portão",
    descriptionPrev: "Facilitamos a programação e sincronização...",
    btnMais: "Ler mais",
    description: "Facilitamos a programação e sincronização dos seus dispositivos.",
    descriptionVideo:"🔑 Facilitamos a programação e sincronização dos seus dispositivos. Na Delorian, você pode fazer o cadastro de controles para portões eletrônicos de forma rápida e segura 📝. Também temos controles novos e originais, garantindo compatibilidade e funcionamento perfeito ⚡. Seja para substituição de controles antigos, aumento da quantidade de controles ou instalação de portões automáticos, a Delorian oferece atendimento em Curitiba e região metropolitana e orçamento grátis.⚡📍💰",
    gifHover: [{ src: "/assets/gifCadastroControl.gif", alt: "Imagem de um controle de portão eletrônico", width: 165, height: 137 }],
    videoModal: "https://www.youtube.com/embed/0C4lofFTt28?si=fs37eE4EzXPFCfor&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbCadastControl.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
  {
    id: 8,
    title: "TX-Car: Abra seu portão com o farol",
    descriptionPrev: "Dispositivo inovador que transforma o...",
    btnMais: "Ler mais",
    description: "Dispositivo inovador que transforma o farol alto em chave do portão",
    descriptionVideo:"A Delorian traz pra você o TX-CAR: o controle invisível que abre o portão com um simples toque no farol! 🚗✨ Chega de controles perdidos ou falhando!🔦 Acione a luz alta e veja o portão abrir. Com o TX-CAR, você ganha mais praticidade e conforto no dia a dia, aproveitando todo o potencial do seu portão eletrônico sem esforços ou riscos desnecessários. Uma tecnologia já conhecida no mercado, agora com instalação personalizada, discreta e com o padrão de qualidade Delorian! Para agendar instalação, só clicar no botão abaixo e falar conosco.✨📞",
    gifHover: [{ src: "/assets/gifTxcar.gif", alt: "Símbolo de mais, indicando que a Delorian realiza outros serviços além dos citados.", width: 120, height: 120 }],
    videoModal: "https://www.youtube.com/embed/LcRoGgZ2lJg?si=cNKDYsdFys73-MET&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbTxcar.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
   {
    id: 9,
    title: "Fotocélula (Anti-esmagamento)",
    descriptionPrev: "Sensor que detecta obstáculos e impede o portão...",
    btnMais: "Ler mais",
    description: "Sensor que detecta obstáculos e impede o portão de fechar para evitar acidentes.",
    descriptionVideo: "A fotocélula, também chamada de sensor antiesmagamento, é um sensor de segurança essencial para portões automáticos. Ele percebe quando algo, como uma pessoa, carro ou animal, está no caminho enquanto o portão está fechando. Se isso acontecer, o portão para ou volta a abrir, evitando acidentes. Com o sensor antiesmagamento, você protege quem você mais ama, incluindo seus pets! 🌟🐾 Além de oferecer segurança, ele garante tranquilidade para toda a família, tornando o uso do seu portão automático muito mais seguro e confiável. 👨‍👩‍👧‍👦",
    gifHover: [{ src: "/assets/gifFotocelula.gif", alt: "Símbolo de mais, indicando que a Delorian realiza outros serviços além dos citados.", width: 800, height: 559 }],
    videoModal: "https://www.youtube.com/embed/Mvo5VTg3FDg?si=W6wTkPCW3HQ-3RAQ&rel=0&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbFotocel.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  },
   {
    id: 10,
    title: "Módulo Wi-fi: Portão inteligente",
    descriptionPrev: "Suporte personalizado para suas...",
    btnMais: "Ler mais",
    description: "Suporte personalizado para suas necessidades.",
    descriptionVideo:"📶🚪Transforme seu portão eletrônico em um portão inteligente! Com o módulo Wi-Fi, seu portão automático se torna um sistema conectado e moderno. Abra e feche pelo celular 📱 ou por assistentes virtuais como Alexa 🗣️, com praticidade, segurança e total controle. Tenha mais conforto no dia a dia, monitore quem acessa sua casa e modernize seu portão sem complicações. Fácil de instalar e totalmente compatível com seu motor, ele leva seu portão para o mundo digital, unindo tecnologia e comodidade ⚡.",
    gifHover: [{ src: "/assets/gifModuloWifi.gif", alt: "Símbolo de mais, indicando que a Delorian realiza outros serviços além dos citados.", width: 120, height: 120 }],
    videoModal: "https://www.youtube.com/embed/mg9dpSeXeI8?si=B47VC4qDDZM5Ie3e&rel=0&autoplay=1",
    imagesThumbNail: [{ src: "/assets/thumbModWifi.webp", alt: "Imagem de um motor de portão eletrônico", width: 300, height: 450 }],
    classname:"motorImage",
    iconLogoDelorian:[{ src: "/assets/iconD.svg", alt:"Logo Delorian", width: 104, height: 104}]
  }

];


export function ServicosDelorian(){

  const [modalAberto, setModalAberto] = useState(false);
  const [solucaoSelecionada, setSolucaoSelecionada] = useState<Solucao | null>(null);
  const [showGifs, setShowGifs] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer para mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));

          if (entry.isIntersecting) {
            // Espera 2 segundos antes de mostrar o GIF
            const showTimer = setTimeout(() => {
              setShowGifs((prev) => new Set(prev).add(id));

              // Timer para esconder o GIF após 3 segundos
              const hideTimer = setTimeout(() => {
                setShowGifs((prev) => {
                  const copy = new Set(prev);
                  copy.delete(id);
                  return copy;
                });
              }, 5000); // duração do GIF

              entry.target.setAttribute("data-hide-timer", String(hideTimer));
            }, 1000); // tempo para considerar o card visível

            entry.target.setAttribute("data-show-timer", String(showTimer));
          } else {
            // Limpa timers caso o card saia da tela
            const showTimer = entry.target.getAttribute("data-show-timer");
            if (showTimer) clearTimeout(Number(showTimer));

            const hideTimer = entry.target.getAttribute("data-hide-timer");
            if (hideTimer) clearTimeout(Number(hideTimer));

            // Remove GIF imediatamente
            setShowGifs((prev) => {
              const copy = new Set(prev);
              copy.delete(id);
              return copy;
            });
          }
        });
      },
      { threshold: 0.9 } // metade do card visível
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div className={styles.portaoComProblemasContainer} id="servicosDelorianId">
      <div className={styles.portaoComProblemasContent}>
        <div className={styles.portaoComProblemasTitleSubtitleContent}>
          <div className={styles.portaoComProblemasTitle}>
            <Image src="/assets/raioAzul.png" className={styles.raioAzul} width={30} height={94} alt="raio azul" />
            <p className={styles.title}>
              Seu portão está com problemas? <span className={styles.titleh1}>Delorian </span>
              <span className={styles.titleSpan}>resolve!</span>
            </p>
          </div>
          <div className={styles.portaoComProblemasSubtitle}>
            <p>
              Vamos até você! Orçamento rápido e gratuito.{" "}
              <a
                href="https://wa.me/5541985011909?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botaoFaleConosco}
              >
                Fale conosco pelo WhatsApp.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.cardsServicesBlock}>
        {solucoes.map((solucao, idx) => (
          <div
            key={solucao.id}
            ref={(el) => { cardRefs.current[idx] = el }}
            data-id={solucao.id}
            className={styles.cardService}
            onClick={() => {
              setSolucaoSelecionada(solucao);
              setModalAberto(true);
            }}
            {...(!isMobile && {
              onMouseEnter: () => setShowGifs(new Set([solucao.id])),
              onMouseLeave: () => setShowGifs(new Set()),
            })}
          >
            {showGifs.has(solucao.id) ? (
              <Image
                src={solucao.gifHover[0].src}
                alt={solucao.gifHover[0].alt}
                width={solucao.gifHover[0].width}
                height={solucao.gifHover[0].height}
                className={styles.gifStyle}
                unoptimized
              />
            ) : (
              <Image
                src={solucao.imagesThumbNail[0].src}
                alt={solucao.imagesThumbNail[0].alt}
                width={solucao.imagesThumbNail[0].width}
                height={solucao.imagesThumbNail[0].height}
                className={styles.videoPlay}
                unoptimized
              />
            )}

            <div className={styles.titleCardsContainer}>
              <Image
                src={solucao.iconLogoDelorian[0].src}
                alt={solucao.iconLogoDelorian[0].alt}
                width={solucao.iconLogoDelorian[0].width}
                height={solucao.iconLogoDelorian[0].height}
                className={styles.imageLogtitle}
                unoptimized
              />
              <h2 className={styles.titleCards}>{solucao.title}</h2>
            </div>

            <div className={styles.circleAnimationPlay}></div>
            <div className={styles.circleAnimationPlay2}></div>
            <Play className={styles.playIcon} color="white" />
          </div>
        ))}
      </div>

      {modalAberto && solucaoSelecionada && (
        <ModalPortaoComProblemas
          solucao={solucaoSelecionada}
          onClose={() => {
            setModalAberto(false);
            setSolucaoSelecionada(null);
          }}
          modalAberto={modalAberto}
        />
      )}
    </div>
  );
}