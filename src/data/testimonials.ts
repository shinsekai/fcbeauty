export interface Testimonial {
  id: string;
  author: string;
  rating: number; // e.g., 5.0
  text: string;
  date: string; // e.g., "31/08/2026"
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'Claire M.',
    rating: 5.0,
    text: 'Flora a réalisé mon maquillage de mariée avec une écoute et une délicatesse rares. Le résultat était exactement ce que j’avais imaginé : naturel, lumineux, et impeccable du matin au bout de la nuit. Merci pour ce moment inoubliable.',
    date: '31/08/2026',
  },
  {
    id: 'testimonial-2',
    author: 'Sophie L.',
    rating: 5.0,
    text: 'J’ai fait mon microshading sourcils chez Flora Alpande et le résultat est magnifique, très naturel. Flora prend le temps de tout expliquer et met immédiatement en confiance. Je recommande vivement.',
    date: '24/08/2026',
  },
  {
    id: 'testimonial-3',
    author: 'Marc D.',
    rating: 5.0,
    text: 'Accueil impeccable et travail d’une grande précision. On ressort de chez Flora sublime et parfaitement détendu. Le meilleur traitement, pour hommes comme pour femmes, sans aucun doute.',
    date: '12/07/2026',
  },
];
