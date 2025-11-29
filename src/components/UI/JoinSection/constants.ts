import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Grâce à leur accompagnement, j’ai pu comprendre chaque étape de Campus France. Mon dossier a été validé sans souci, et je suis enfin prêt pour la France.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "Honnêtement, sans eux, je serais encore bloqué à la première étape. L’aide reçue a été précieuse, du dépôt de dossier jusqu’à l’obtention du visa.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Ils m'ont aidée à préparer mon entretien Campus France, corriger ma lettre de motivation et éviter les erreurs. Aujourd’hui, je suis à Lyon pour mes études.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "Je ne savais même pas par où commencer, mais ils m'ont guidé avec patience. L’accompagnement m’a vraiment évité le stress et les erreurs classiques.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
"J’ai adoré leur approche : simple, efficace, et humaine. Grâce à eux, j’ai obtenu mon visa sans complications. Je recommande à 100%.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Rejoins des centaines', 'd’étudiants satisfaits'];
