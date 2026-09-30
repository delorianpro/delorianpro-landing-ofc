export type GoogleReview = {
  name: string;
  initials: string;
  comment: string;
  date: string;
  rating: number;
  photo?: string;
};

// TODO: Substitua estes depoimentos provisórios pelas avaliações oficiais.
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Roberto Stier",
    initials: "RS",
    comment:
      "Excelente empresa e profissional. Tudo feito com critério e excelência, pontualidade e comprometimento. Recomendo fortemente !",
    date: "2025-12-15",
    rating: 5,
  },
  {
    name: "Samuel Berger",
    initials: "SB",
    comment:
      "São atenciosos e ótimos no que fazem. Contratei o serviço para o condomínio onde sou sindico e não me arrependi. Indico.",
    date: "2025-11-25",
    rating: 5,
  },
    {
    name: "Liquexpress TI",
    initials: "LT",
    comment:
      "Atendimento rápido, prático e objetivo. Apresentou alternativas para a necessidade que tínhamos, além de efetuar o serviço rapidamente. Itens instalados - automação do portão com acionamento via wifi e interfone. Parabéns.",
    date: "15-07-2025",
    rating: 5,
  },
];

