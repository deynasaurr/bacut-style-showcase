export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  tags: string[];
}

export const products: Product[] = [
  // T-Shirts
  {
    id: '1',
    name: 'Classic Cotton Tee',
    category: 'T-Shirts',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    description: 'Soft, breathable cotton t-shirt perfect for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['cotton', 'casual', 'basic'],
  },
  {
    id: '2',
    name: 'Premium V-Neck',
    category: 'T-Shirts',
    price: 34.99,
    image: 'public/vneck.webp',
    description: 'Elegant v-neck design with premium fabric blend.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['vneck', 'premium', 'elegant'],
  },
  // Skirts
  {
    id: '3',
    name: 'Pleated Mini Skirt',
    category: 'Skirts',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80',
    description: 'Chic pleated mini skirt with comfortable waistband.',
    sizes: ['XS', 'S', 'M', 'L'],
    tags: ['pleated', 'mini', 'chic'],
  },
  {
    id: '4',
    name: 'Midi A-Line Skirt',
    category: 'Skirts',
    price: 59.99,
    image: 'public/midi.webp',
    description: 'Versatile midi skirt with flattering A-line silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['midi', 'aline', 'versatile'],
  },
  // Underwear
  {
    id: '5',
    name: 'Seamless Comfort Bra',
    category: 'Underwear',
    price: 39.99,
    image: 'public/seamless.webp',
    description: 'Ultra-soft seamless bra with all-day comfort.',
    sizes: ['32A', '32B', '34A', '34B', '34C', '36B', '36C'],
    tags: ['bra', 'seamless', 'comfort'],
  },
  {
    id: '6',
    name: 'Cotton Brief Set',
    category: 'Underwear',
    price: 24.99,
    image: 'public/cottonbrief.webp',
    description: 'Set of 3 comfortable cotton briefs.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['briefs', 'cotton', 'set'],
  },
  {
    id: '7',
    name: 'Lace Panty Collection',
    category: 'Underwear',
    price: 34.99,
    image: 'public/laces.jpg',
    description: 'Delicate lace panties with comfortable fit.',
    sizes: ['XS', 'S', 'M', 'L'],
    tags: ['lace', 'panties', 'delicate'],
  },
  {
    id: '8',
    name: 'Sports Bra Pro',
    category: 'Underwear',
    price: 44.99,
    image: 'public/sports.webp',
    description: 'High-support sports bra for active lifestyles.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['sports', 'bra', 'active'],
  },
  // Shorts
  {
    id: '9',
    name: 'Cycling Shorts',
    category: 'Shorts',
    price: 44.99,
    image: 'public/cyc.webp',
    description: 'High-waisted cycling shorts with compression fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['cycling', 'compression', 'active'],
  },
  {
    id: '10',
    name: 'Denim Cut-Offs',
    category: 'Shorts',
    price: 39.99,
    image: 'public/denim.webp',
    description: 'Classic denim shorts with frayed hem.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['denim', 'casual', 'summer'],
  },
  {
    id: '11',
    name: 'Athletic Running Shorts',
    category: 'Shorts',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80',
    description: 'Lightweight running shorts with built-in liner.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['athletic', 'running', 'lightweight'],
  },
  // Sweaters/Jackets
  {
    id: '12',
    name: 'Cashmere Blend Sweater',
    category: 'Sweaters',
    price: 89.99,
    image: 'public/cash.jpg',
    description: 'Luxurious cashmere blend crew neck sweater.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['cashmere', 'luxury', 'warm'],
  },
  {
    id: '13',
    name: 'Cropped Cardigan',
    category: 'Sweaters',
    price: 64.99,
    image: 'public/cropped.webp',
    description: 'Stylish cropped cardigan with button closure.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['cardigan', 'cropped', 'stylish'],
  },
  {
    id: '14',
    name: 'Leather Jacket',
    category: 'Jackets',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    description: 'Classic leather jacket with modern fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['leather', 'jacket', 'classic'],
  },
  {
    id: '15',
    name: 'Puffer Vest',
    category: 'Jackets',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80',
    description: 'Lightweight puffer vest for layering.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['puffer', 'vest', 'lightweight'],
  },
];
