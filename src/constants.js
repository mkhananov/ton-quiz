export const COLOR = {
  PRIMARY: "#0098ea",
  PRIMARY_HOVER: "#07acff",
};

export const VALUE = {
  PRESENT: 500,
};

export const QUESTIONS = [
  {
    id: "1",
    title: "About TON",
    theory:
      "The Open Network (TON) is a decentralized and open internet platform made up of several components. These include: TON Blockchain, TON DNS, TON Storage, and TON Sites. TON Blockchain is the core protocol that connects TON’s underlying infrastructure together to form the greater TON Ecosystem.",
    question: "What is TON?",
    variants: [
      { value: "1", label: "Decentralized and open internet platform" },
      { value: "2", label: "The core protocol that connects TON" },
    ],
  },
  {
    id: "2",
    title: "Дуров",
    theory: "Паша Дуров - создатель telegram",
    question: "Who is Дуров?",
    variants: [
      { value: "1", label: "Человек" },
      { value: "2", label: "Не человек" },
      { value: "3", label: "Создатель телеграм" },
      { value: "4", label: "Создатель вконтакте" },
    ],
  },
  {
    id: "3",
    title: "Interoperability",
    theory:
      "Blockchain is a decentralized, distributed digital ledger technology that records transactions in a secure and transparent way. It operates through a chain of blocks, where each block contains data, a timestamp, and a cryptographic link to the previous block, making it tamper-resistant. Blockchain is often used in cryptocurrencies but has applications in various fields, including finance, supply chain, and data management.",
    question: "What is blockchain?",
    variants: [
      {
        value: "1",
        label:
          "It is a type of cryptocurrency used to pay for goods and services.",
      },
      {
        value: "2",
        label:
          "It is a decentralized data storage technology based on a chain of blocks that ensures the security and transparency of transactions.",
        isCorrect: true,
      },
      { value: "3", label: "It is software for creating computer games." },
      {
        value: "4",
        label:
          "It is an artificial intelligence technology that allows robots to interact with humans.",
      },
    ],
  },
];
