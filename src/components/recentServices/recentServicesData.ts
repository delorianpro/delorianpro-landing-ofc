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
  whatsappMessage?: string;
}

/**
 * Conteúdo temporário: substitua estes objetos pelos dados dos serviços reais.
 * Quando uma imagem não for informada, o card exibe o placeholder da categoria.
 */
export const recentServices: RecentService[] = [
  {
    id: 1,
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
        src: "/assets/troca-dois-motores-2.png",
        alt: "Motores de portão basculante e deslizante após o conserto",
      },
    ],
  },
  {
    id: 2,
    category: "Manutenção",
    status: "Concluído",
    type: "Tipo a definir",
    title: "Serviço de interfone (exemplo)",
    description:
      "Descrição temporária. Substitua este texto pelas informações do atendimento realizado.",
    tasksPerformed: [
      "Etapa do serviço a preencher",
      "Etapa do serviço a preencher",
      "Etapa do serviço a preencher",
    ],
    result:
      "Resultado temporário. Substitua este texto pelo resultado final do atendimento.",
    city: "Curitiba - PR",
    date: "Setembro",
    images: [],
  },
  {
    id: 3,
    category: "Câmeras",
    status: "Concluído",
    type: "Tipo a definir",
    title: "Serviço de câmeras (exemplo)",
    description:
      "Descrição temporária. Substitua este texto pelas informações do atendimento realizado.",
    tasksPerformed: [
      "Etapa do serviço a preencher",
      "Etapa do serviço a preencher",
      "Etapa do serviço a preencher",
    ],
    result:
      "Resultado temporário. Substitua este texto pelo resultado final do atendimento.",
    city: "Cidade a definir",
    date: "Data a definir",
    images: [],
  },
];

// Preencha quando a página de listagem de serviços estiver disponível.
export const allServicesHref = "";
