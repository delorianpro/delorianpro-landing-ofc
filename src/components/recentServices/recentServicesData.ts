export interface RecentServiceImage {
  src: string;
  alt: string;
}

export interface RecentService {
  id: number;
  category: string;
  status: "Concluído";
  type: string;
  title: string;
  description: string;
  tasksPerformed: string[];
  result: string;
  city: string;
  date: string;
  images?: RecentServiceImage[];
  youtubeVideo?: string;
  whatsappMessage?: string;
}

/**
 * Conteúdo temporário: substitua estes objetos pelos dados dos serviços reais.
 * Quando uma imagem não for informada, o card exibe o placeholder da categoria.
 */
export const recentServices: RecentService[] = [
    {
    id: 1,
    category: "Manutenção e Automação",
    status: "Concluído",
    type: "Modernização do sistema de portão automático",
    title: "Modernização e configuração de portão",
    description:
      "Serviço realizado no Centro de Curitiba, com substituição da central de comando, instalação de receptora e configuração de 16 controles. Também foram realizados ajustes na fiação e no sistema antiesmagamento, garantindo maior segurança e praticidade.",
    tasksPerformed: [
      "Substituição da central de comando",
      "Instalação de receptora",
      "Cadastro e configuração de 16 controles",
      "Organização e identificação da fiação",
      "Substituição da fiação do sistema antiesmagamento",
      "Revisão do sistema de automação",
    ],
    result:
      "Sistema de automação revisado e modernizado, com controles configurados, fiação organizada e sistema antiesmagamento atualizado.",
    city: "Curitiba - PR",
    date: "Outubro",
    youtubeVideo: "j8LhwUOq9w8",
    images: [
      {
        src: "/assets/servico-centro-1.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
       {
        src: "/assets/servico-centro-2.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
       {
        src: "/assets/servico-centro-3.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
      {
        src: "/assets/servico-centro-4.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
      {
        src: "/assets/servico-centro-5.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
      {
        src: "/assets/servico-centro-6.webp",
        alt: "Central de comando e fiação organizada e identificada pela Delorian",
      },
    ],
  },
  {
    id: 2,
    category: "Instalação e Automação",
    status: "Concluído",
    type: "Modernização de portão automático",
    title: "Instalação de motor, TX Car e sistema antiesmagamento",
    description:
      "Serviço completo de modernização de portão automático, com substituição do motor, instalação de dispositivos de segurança e configuração de funcionalidades para proporcionar mais praticidade, conforto e segurança no dia a dia.",
    tasksPerformed: [
      "Substituição do motor do portão",
      "Instalação de fotocélula antiesmagamento",
      "Instalação de módulo Wi-Fi",
      "Configuração de parada suave",
      "Programação de fechamento automático após 2 minutos",
      "Instalação do TX Car",
    ],
    result:
      "Portão modernizado e configurado com recursos de segurança e automação, proporcionando um funcionamento mais seguro, prático e confortável para toda a família.",
    city: "Curitiba - PR",
    date: "Outubro",
    youtubeVideo: "cbrV4K74GYk",
    images: [
      {
        src: "/assets/modernizacao-portao-automatico-1.webp",
        alt: "Conserto de dois motores de portão realizado pela Delorian",
      },
       {
        src: "/assets/modernizacao-portao-automatico-5.webp",
        alt: "Conserto de motor de portão deslizante realizado pela Delorian",
      },
      {
        src: "/assets/modernizacao-portao-automatico-2.jpg",
        alt: "Conserto de dois motores de portão realizado pela Delorian",
      },
      {
        src: "/assets/modernizacao-portao-automatico-3.jpg",
        alt: "Conserto de dois motores de portão realizado pela Delorian",
      },
      {
        src: "/assets/modernizacao-portao-automatico-4.jpg",
        alt: "Conserto de motor de portão deslizante realizado pela Delorian",
      },
       {
        src: "/assets/modernizacao-portao-automatico-8.webp",
        alt: "Conserto de motor de portão deslizante realizado pela Delorian",
      },
    ],
  },
   {
    id: 3,
    category: "Manutenção",
    status: "Concluído",
    type: "Conserto de motores de portão",
    title: "Conserto de dois motores de portão",
    description:
      "Atendimento realizado no bairro Pilarzinho, em Curitiba, para o conserto de dois motores de portão: um basculante e um deslizante.",
    tasksPerformed: [
      "Conserto do motor do portão basculante",
      "Conserto do motor do portão deslizante",
    ],
    result:
      "Conserto dos dois motores concluído.",
    city: "Curitiba - PR",
    date: "Setembro",
    images: [
      {
        src: "/assets/troca-dois-motores-1.png",
        alt: "Conserto de dois motores de portão realizado pela Delorian",
      },
       {
        src: "/assets/casa-dois-motores-1.webp",
        alt: "Motores de portão basculante e deslizante após o conserto",
      },
      {
        src: "/assets/casa-dois-motores-2.webp",
        alt: "Motores de portão basculante e deslizante após o conserto",
      },
      {
        src: "/assets/casa-dois-motores-3.webp",
        alt: "Motores de portão basculante e deslizante após o conserto",
      },
    ],
  },
];

// Preencha quando a página de listagem de serviços estiver disponível.
export const allServicesHref = "";
