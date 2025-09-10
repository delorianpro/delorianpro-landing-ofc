'use client';

import { ChevronDown, ChevronUp, MousePointerClick} from 'lucide-react';
import styles from './StylesFaq.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'Qual é o custo para consertar um motor elétrico?',
    answer: 'O custo varia conforme o motor, o defeito e a complexidade da instalação. O ideal é que um técnico avalie para indicar a melhor solução. E na Delorian a visita técnica para avaliação é 100% GRATUITA. Fale com a gente!',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Meu motor elétrico queimou. É necessário comprar um novo?',
    answer: 'Em muitos casos, é possível realizar a rebobinagem do estator, permitindo que o motor volte a funcionar normalmente. Essa solução costuma ser mais econômica e pode prolongar a vida útil do equipamento. Podemos avaliar o seu caso e te orientar. Fale com a gente para receber suporte técnico sem compromisso.',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Meu portão eletrônico parou. O que pode ser?',
    answer: 'Entre as causas mais comuns, estão o desgaste natural do motor elétrico devido ao tempo de uso, falhas elétricas, problemas na fiação, obstruções no trilho ou até mesmo a queima da placa eletrônica. Para um diagnóstico preciso, é importante realizar uma avaliação técnica no local. E com a Delorian, essa avaliação é totalmente GRATUITA. Entre em contato com a gente para agendar uma visita técnica e identificar o problema.',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Tenho um portão manual e gostaria de automatizá-lo. Quanto custa para instalar o motor?',
    answer: 'Na Delorian, você encontra automação completa para portões! Estamos com uma promoção imperdível: kit de motor com instalação inclusa, para portões basculantes, deslizantes e pivotantes, acompanhado de 2 controles remotos, a partir de R$594, com notal fiscal e 1 ano de garantia. O valor final pode variar conforme o tipo de motor e as características da instalação desejada.  Para saber o preço exato para o seu portão, fale direto com um técnico da Delorian.',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Qual a melhor marca de motor para portão eletrônico?',
    answer: 'Depende das necessidades e características específicas de cada cliente. Nossa equipe técnica realiza uma avaliação GRATUITA no local para analisar seu portão. Com base nessa análise, indicamos a marca e o modelo que melhor se encaixam no seu cenário, buscando sempre o equilíbrio perfeito entre performance, durabilidade e custo-benefício. Na Delorian, trabalhamos com as principais marcas do mercado, como PPA, Peccinin, Garen, Intelbras, Nice e Rossi, garantindo uma solução personalizada que atende exatamente ao que você precisa. Assim, você terá um motor que atende exatamente ao que precisa, sem pagar por recursos desnecessários.  Fale com a gente e descubra qual modelo é mais indicado para o seu caso.',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Minha placa queima com frequência por causa de insetos. O que posso fazer para evitar isso?',
    answer: 'Uma dica simples e eficaz é colocar pastilhas ou bolinhas de naftalina dentro da caixa do motor, trocando-as a cada 6 meses. A naftalina ajuda a afastar insetos como formigas e baratas, que podem causar curtos-circuitos e danificar a placa eletrônica. Converse com nossos técnicos para aplicar soluções eficazes e evitar novos danos.',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  }, 
  {
    question: 'O que significam portão deslizante, basculante e pivotante?',
    answer: 'O portão deslizante é aquele que se move lateralmente, deslizando sobre uma cremalheira. É ideal para locais com pouco espaço livre na frente. O portão basculante se abre para cima, como uma tampa, girando em torno de um eixo e geralmente é acionado por motor elétrico para facilitar o movimento. É muito comum em garagens e também economiza espaço na frente. Já o portão pivotante abre girando para dentro ou para fora, como uma porta normal, podendo ser automatizado com motor elétrico. Se tiver dúvidas sobre qual é o melhor tipo para você, fale com nossa equipe!',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
  {
    question: 'Há cobrança para a visita de avaliação do portão automático?',
    answer: 'Na Delorian, a visita técnica é 100% GRATUITA! Isso mesmo, não cobramos nada para ir até o local verificar o seu portão eletrônico. E o melhor: o orçamento também é totalmente sem custo e sem compromisso! Você recebe um atendimento técnico especializado, direto no local, sem pagar nada por isso. Transparência, respeito e confiança é com a Delorian! Fale com a nossa equipe para agendar sua avaliação GRATUITA. Estamos prontos para te ajudar!',
    contact:'CLIQUE AQUI E FALE CONOSCO',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Detecta clique fora do componente
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null); // fecha tudo
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const phoneNumber = '+5541985011909'; 
    const handleClickTalkWithUs = (index: number) => {
    const message = "Olá! " + faqData[index].question;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); 
  }

  return (
    <div className={styles.faqContainer} ref={containerRef}>
      <div className={styles.titleFaqContainer}>
        <Image
          src={'/assets/raioAzul.png'}
          width={30}
          height={94}
          alt={'raio azul'}
          className={styles.raioAzul}
        />
        <h2 className={styles.titleFaq}>FAQ – Delorian responde</h2>
      </div>

      <div className={styles.questionsContainer}>
        {faqData.map((item, index) => (
          <div
            className={styles.questionAndanswer}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className={styles.questionsQueryContainer}>
              <h3 className={styles.question}>{item.question}</h3>
              {openIndex === index ? <ChevronUp strokeWidth={5} /> : <ChevronDown strokeWidth={5}/>}
            </div>
            {openIndex === index && (
             <div className={styles.answerAndCTA}>
               <p className={styles.answer}>{item.answer} 
               </p><b className={styles.cta} onClick={() =>handleClickTalkWithUs(index)}>{item.contact}<MousePointerClick  className={styles.ctaIcon}/></b>
             </div> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
}