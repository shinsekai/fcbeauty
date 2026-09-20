export interface Service {
  id: string;
  name: string;
  category: 'Luxury' | 'Makeup' | 'Semi-Permanent';
  duration: string;
  price: string; // e.g., "58€" or "Sur devis"
  description?: string;
}

export const services: Service[] = [
  {
    id: 'bridal-signature',
    name: 'Bridal Signature',
    category: 'Luxury',
    duration: 'Sur devis',
    price: 'Sur devis',
  },
  {
    id: 'brand-editorial',
    name: 'Brand & Editorial',
    category: 'Luxury',
    duration: 'Sur devis',
    price: 'Sur devis',
  },
  {
    id: 'private-events',
    name: 'Private Events',
    category: 'Luxury',
    duration: 'Sur devis',
    price: 'Sur devis',
  },
  {
    id: 'maquillage-jour',
    name: 'Maquillage Jour',
    category: 'Makeup',
    duration: '45min',
    price: '58€',
  },
  {
    id: 'maquillage-soir-theme',
    name: 'Maquillage Soir / Thème',
    category: 'Makeup',
    duration: '1h',
    price: '89€',
  },
  {
    id: 'maquillage-mariee',
    name: 'Maquillage Mariée',
    category: 'Makeup',
    duration: '2h',
    price: 'Sur devis',
  },
  {
    id: 'maquillage-mariee-essai',
    name: 'Maquillage Mariée + 1 Essai',
    category: 'Makeup',
    duration: '30min',
    price: 'Sur devis',
  },
  {
    id: 'essai-mariage',
    name: 'Essai mariage',
    category: 'Makeup',
    duration: '40min',
    price: '90€',
  },
  {
    id: 'eye-liner-dermographie',
    name: 'Eye Liner (dermographie)',
    category: 'Semi-Permanent',
    duration: '1h30',
    price: '150€',
  },
  {
    id: 'poil-a-poil-dermographie',
    name: 'Poil à Poil (dermographie)',
    category: 'Semi-Permanent',
    duration: '3h',
    price: '210€',
  },
  {
    id: 'microshading-sourcils',
    name: 'Microshading Sourcils',
    category: 'Semi-Permanent',
    duration: '2h',
    price: '190€',
  },
  {
    id: 'soft-shading-sourcils',
    name: 'Soft Shading Sourcils',
    category: 'Semi-Permanent',
    duration: '3h',
    price: '190€',
  },
];
