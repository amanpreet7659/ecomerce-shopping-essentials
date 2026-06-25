import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Classic Supima Tee',
    category: 'Regular Tee',
    fabric: 'Supima',
    price: 799,
    badge: 'Best Seller',
    gsm: '180 GSM',
    description: 'Ultra-soft premium feel',
    colors: ['#0A0A0A', '#FFFFFF', '#C4A882'],
    image: '/images/products/p1.jpg',
  },

  {
    id: 'P002',
    name: 'Heavy Drop Tee',
    category: 'Oversized Tee',
    fabric: 'Heavy Duty',
    price: 899,
    originalPrice: 1099,
    badge: 'New',
    gsm: '260 GSM',
    description: 'Structured oversized fit',
    colors: ['#5C4B3A', '#0A0A0A'],
    image: '/images/products/p2.jpg',
  },

  {
    id: 'P003',
    name: 'Breezo Polo',
    category: 'Polo',
    fabric: 'Breezo',
    price: 699,
    gsm: '140 GSM',
    description: 'Breathable everyday comfort',
    colors: ['#4A6B5C', '#FFFFFF'],
    image: '/images/products/p3.jpg',
  },
]