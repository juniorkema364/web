import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Un accompagnement", 'nouvelle génération'];

export const desktopParagraphPhrase = [
  "Découvre notre service pensé pour les étudiants : un suivi complet",
  "de ta procédure Campus France, avec outils modernes,",
  "experts dédiés et assistance à chaque étape.",
];

export const mobileHeaderPhrase = ["Un accompagnement", 'nouvelle génération'];

export const mobileParagraphPhrase = [
  "Un service sur mesure pour réussir ta procédure Campus France.",
  'Des outils simples, un accompagnement humain,',
  'et un vrai coup de pouce à chaque étape.',
];

export const edges = [
  {
    point: 'Suivi 100% personnalisé',
    details:
      'On s’adapte à ton profil et ton projet d’étude pour t’aider efficacement du début à la fin.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Documents bien rédigés',
    details:
      'Lettre de motivation, CV, choix de formations... tout est optimisé pour maximiser tes chances.',
    icon: ic_identification,
  },
  {
    point: 'Préparation à l’entretien',
    details:'On te prépare à l’entretien Campus France avec des simulations et des conseils ciblés.',
    icon: ic_lock_closed,
  },
];
