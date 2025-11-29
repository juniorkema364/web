
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// Pour desktop , et ordinateur
export const desktopHeaderPhrase = ['Étudier en France,', 'devient simple.'];
export const desktopParagraphPhrase = [
  "On t'accompagne dans chaque étape de ta procédure Campus France,",
  "pour maximiser tes chances d'obtenir ton visa.",
];
export const desktopBriefNotePhrase = [
  'Dossier optimisé,',
  'documents bien rédigés,',
  'et accompagnement sur mesure,',
  'tout au même endroit.',
];

// Version mobile
export const mobileHeaderPhrase = ['Étudier en France,', 'devient simple.'];
export const mobileParagraphPhrase = [
  "On t'accompagne dans chaque étape",
  'de ta procédure Campus France,',
  "jusqu'à l'obtention de ton visa.",
];

export const mobileBriefNotePhrase = [
  'Dossier',
  ' optimisé,',
  'documents',
  ' bien rédigés,',
  'accompagnement',
  ' personnalisé,',
  'zéro stress.',
];


export const edges = [
  {
    point: "Accompagnement 100% personnalisé",
    details:
      "Chaque étudiant a un parcours unique. On s’adapte à ton profil pour t’aider efficacement à chaque étape.",
    icon: ic_banknotes,
  },
  {
    point: "Experts Campus France disponibles",
    details:
      "Notre équipe connaît parfaitement les démarches et reste disponible pour répondre à toutes tes questions.",
    icon: ic_circle_stack,
  },
  {
    point: "Gagne du temps et évite les erreurs",
    details:
      "On t’évite les pièges fréquents de la procédure Campus France. Moins de stress, plus d'efficacité.",
    icon: ic_arrows_left_right,
  },
];
