export interface Product {
  id: string;
  name: string;
  category: 'chairs' | 'desks' | 'storage' | 'combos' | 'tables';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  condition: 'Brand New' | 'Certified Refurbished';
  image: string;
  additionalImages?: string[];
  description: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
    weightCapacity?: string;
  };
  materials: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  isPopular?: boolean;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  customizationNote?: string;
}

export interface CategoryShowcaseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlightSpecs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
