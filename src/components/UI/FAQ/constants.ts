type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Questions fréquentes', 'sur nos services'];
export const mobileHeaderPhrase = ['Questions', 'fréquentes', 'Campus France'];

export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Comment créer un compte sur la plateforme ?',
    answer:
      'Il vous suffit de cliquer sur “Créer un compte”, de remplir vos informations et de suivre les instructions pour activer votre accès.',
  },
  {
    question: 'Quels services proposez-vous pour Campus France ?',
    answer:
      'Nous vous accompagnons à chaque étape : dépôt de dossier, rédaction de lettre de motivation, préparation à l’entretien et suivi du visa.',
  },
  {
    question: 'Est-ce que vous corrigez les lettres de motivation ?',
    answer:
      'Oui, nous proposons un service de relecture et correction pour maximiser vos chances de validation.',
  },
  {
    question: 'Proposez-vous un accompagnement personnalisé ?',
    answer:
      'Oui, chaque étudiant bénéficie d’un suivi individuel pour s’assurer que son parcours Campus France se déroule sans erreur.',
  },
];

