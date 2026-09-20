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
    imageUrl:
      'https://images.unsplash.com/photo-1610047614301-13c63f00c032?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bridal-2',
    title: 'Élégance nuptiale',
    category: 'Bridal',
    imageUrl:
      'https://images.unsplash.com/photo-1600685890506-593fdf55949b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'editorial-1',
    title: 'Regard prisme',
    category: 'Editorial',
    imageUrl:
      'https://images.unsplash.com/photo-1603300382284-72ddf4985216?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'editorial-2',
    title: 'Beauté éditoriale',
    category: 'Editorial',
    imageUrl:
      'https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'brand-events-1',
    title: 'Univers de marque',
    category: 'Brand Events',
    imageUrl:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'semi-permanent-1',
    title: 'Eye liner précis',
    category: 'Semi-Permanent',
    imageUrl:
      'https://images.unsplash.com/photo-1609360706137-c59ba75b4d26?q=80&w=1200&auto=format&fit=crop',
  },
];
