export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Editorial' | 'Brand Events' | 'Semi-Permanent';
  imageUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'bridal-1',
    title: 'Mariée radieuse',
    category: 'Bridal',
    imageUrl: '/images/bridal-1.jpg',
  },
  {
    id: 'bridal-2',
    title: 'Mariée bohème',
    category: 'Bridal',
    imageUrl: '/images/bridal-2.jpg',
  },
  {
    id: 'bridal-3',
    title: 'Élégance nuptiale',
    category: 'Bridal',
    imageUrl: '/images/bridal-3.jpg',
  },
  {
    id: 'bridal-4',
    title: 'Éclat de mariée',
    category: 'Bridal',
    imageUrl: '/images/bridal-4.jpg',
  },
  {
    id: 'brand-events-1',
    title: 'Glam soirée',
    category: 'Brand Events',
    imageUrl: '/images/brand-events-1.jpg',
  },
  {
    id: 'brand-events-2',
    title: 'Éclat doré',
    category: 'Brand Events',
    imageUrl: '/images/brand-events-2.jpg',
  },
  {
    id: 'brand-events-3',
    title: 'Regard fumé',
    category: 'Brand Events',
    imageUrl: '/images/brand-events-3.jpg',
  },
  {
    id: 'brand-events-4',
    title: 'Éclat naturel',
    category: 'Brand Events',
    imageUrl: '/images/brand-events-4.jpg',
  },
];
