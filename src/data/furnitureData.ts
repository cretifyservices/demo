import { Product, CategoryShowcaseItem, Testimonial, FaqItem } from '../types/furniture';

// Primary high-fidelity local assets
import heroChairImg from '../assets/images/hero_executive_chair_1790965965047.jpg';
import modularDeskImg from '../assets/images/category_modular_desk_1790965986859.jpg';
import boardroomImg from '../assets/images/category_executive_boardroom_1790965999038.jpg';
import meshChairImg from '../assets/images/product_ergonomic_mesh_chair_1790966012423.jpg';
import storageCupboardImg from '../assets/images/category_storage_cupboard_1790966024174.jpg';

export const CATEGORY_SHOWCASE: CategoryShowcaseItem[] = [
  {
    id: 'sofas-seating',
    number: '01',
    title: 'Sofas & Executive Seating',
    subtitle: 'Comfort, shaped beautifully',
    description: 'Soft textures, supportive anatomical forms, and timeless silhouettes designed for everyday executive lounging and client reception.',
    image: heroChairImg,
    highlightSpecs: ['High-density molded foam', 'Genuine Italian top-grain & wool blend', 'Solid kiln-dried ash wood framing']
  },
  {
    id: 'system-workstations',
    number: '02',
    title: 'System Tables & Desks',
    subtitle: 'Engineered for relentless focus',
    description: 'Calm proportions, integrated wire trunking, and tactile warm oak surfaces that elevate corporate offices and creative home studios.',
    image: modularDeskImg,
    highlightSpecs: ['Scratch-resistant melamine top', 'Powder-coated laser steel legs', 'Hidden cable raceway & grommets']
  },
  {
    id: 'conference-dining',
    number: '03',
    title: 'Conference & Dining Tables',
    subtitle: 'Made for meaningful gathering',
    description: 'Solid, balanced architectural designs built around shared ideas, boardroom decisions, and seamless team collaborations.',
    image: boardroomImg,
    highlightSpecs: ['Fluted dark timber plinths', 'Integrated pop-up power modules', 'Seats 8 to 16 executives effortlessly']
  },
  {
    id: 'ergonomic-chairs',
    number: '04',
    title: 'Ergonomic Task Chairs',
    subtitle: 'A statement worth sitting in',
    description: 'Sculptural forms and distinctive mechanical adjustments that bring dynamic lumbar posture to workstations and creative teams.',
    image: meshChairImg,
    highlightSpecs: ['Multi-angle synchro-tilt mechanism', 'Breathable aerodynamic Korean mesh', 'Class-4 heavy duty hydraulic gas lift']
  },
  {
    id: 'storage-cupboards',
    number: '05',
    title: 'Storage & Steel Cupboards',
    subtitle: 'Your workspace pause to organize',
    description: 'Quiet, architectural storage credenzas, tamper-proof steel file cabinets, and glass showcase cupboards for organized spaces.',
    image: storageCupboardImg,
    highlightSpecs: ['CRCA heavy-gauge cold rolled steel', 'Soft-closing German hinges', 'Dual key locking security mechanism']
  }
];

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: 'faw-mesh-pro',
    name: 'AeroFlex Ergonomic Mesh Task Chair',
    category: 'chairs',
    categoryLabel: 'Ergonomic Task Seating',
    price: 8499,
    originalPrice: 12999,
    condition: 'Brand New',
    image: meshChairImg,
    description: 'Engineered with active dynamic lumbar support, breathable German-woven elastomeric mesh, 3D adjustable armrests, and a multi-lock synchro-tilt mechanism for 12+ hour daily work comfort.',
    features: [
      'Self-adjusting dynamic lumbar spine support',
      '3D multidirectional soft-touch armrests',
      'Class 4 certified heavy duty pneumatic cylinder',
      'Breathable thermal-neutral mesh back and seat'
    ],
    dimensions: {
      height: '118 - 128 cm',
      width: '66 cm',
      depth: '64 cm',
      weightCapacity: '150 kg'
    },
    materials: ['High-tensile Korean mesh', 'Polished aluminum alloy star base', 'PU silent nylon casters'],
    colors: [
      { name: 'Onyx Black', hex: '#1A1A1A' },
      { name: 'Graphite Grey', hex: '#4A4A4A' },
      { name: 'Frost White', hex: '#E5E5E5' }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 384,
    isPopular: true,
    tag: 'Bestseller'
  },
  {
    id: 'faw-sys-desk-4ft',
    name: '4-Foot Executive System Workstation',
    category: 'desks',
    categoryLabel: 'System Tables & Desks',
    price: 6999,
    originalPrice: 10499,
    condition: 'Brand New',
    image: modularDeskImg,
    description: 'Fawzaana signature 4-foot modular workstation desk featuring heavy-gauge metal understructure, thick scratch-resistant melamine pre-laminated top, and discreet dual wire management ducts.',
    features: [
      'Sturdy 50x50mm powder-coated steel tubular frame',
      '25mm thick scratch and heat resistant top with 2mm PVC edge banding',
      'Dual grommet cutouts for clean wire routing',
      'Modular linkable design for linear rows or pod formations'
    ],
    dimensions: {
      height: '75 cm',
      width: '120 cm (4 Feet)',
      depth: '60 cm',
      weightCapacity: '180 kg'
    },
    materials: ['Engineered particle board with oak veneer', 'Carbon steel tube understructure'],
    colors: [
      { name: 'Natural Warm Oak', hex: '#C2A379' },
      { name: 'Matte Charcoal', hex: '#262626' },
      { name: 'Walnut Dark Wood', hex: '#5A3825' }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 219,
    isPopular: true,
    tag: 'Office Essential'
  },
  {
    id: 'faw-combo-table-chair',
    name: 'Refurbished 4-Foot Table + High-Back Chair Combo',
    category: 'combos',
    categoryLabel: 'Workstation Combo Offer',
    price: 7499,
    originalPrice: 16500,
    condition: 'Certified Refurbished',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    description: 'As highlighted in our Chennai showroom special! Certified refurbished 4ft heavy system desk paired with a fully restored ergonomic high-back mesh chair. Stripped, inspected, sanitized, and reconditioned to 98% factory grade.',
    features: [
      'Complete productive workspace station at 55% discount',
      'Re-greased & factory-tested hydraulic gas lift',
      'Deep steam-cleaned mesh and brand new memory foam cushion',
      'Includes 1-Year Fawzaana Certified Warranty'
    ],
    dimensions: {
      height: '75 cm desk / 120 cm chair',
      width: '120 cm (Desk width)',
      depth: '60 cm',
      weightCapacity: '150 kg'
    },
    materials: ['Restored heavy gauge steel', 'Refurbished high-density foam', 'Oak laminate'],
    colors: [
      { name: 'Classic Black / Natural Oak', hex: '#2B2B28' },
      { name: 'Silver Steel / Dark Walnut', hex: '#737373' }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 512,
    isPopular: true,
    tag: 'Showroom Special'
  },
  {
    id: 'faw-armchair-terracotta',
    name: 'Vanguard Terracotta Sculptural Lounge Chair',
    category: 'chairs',
    categoryLabel: 'Executive Lounge & Accent',
    price: 14500,
    originalPrice: 21900,
    condition: 'Brand New',
    image: heroChairImg,
    description: 'A masterpiece of contemporary ergonomic tailoring. Hand-tufted breathable terracotta boucle fabric cradled in a precision-formed solid walnut timber subframe. Designed for executive suites, lounges, and luxury living rooms.',
    features: [
      'Sculptural curved wingback contours for shoulder & neck release',
      'Solid kiln-dried American walnut timber splayed legs',
      'Premium high-resilience foam core that never sags',
      'Stain-resistant textured architectural boucle upholstery'
    ],
    dimensions: {
      height: '92 cm',
      width: '84 cm',
      depth: '86 cm',
      weightCapacity: '160 kg'
    },
    materials: ['Italian textured boucle', 'Solid walnut hardwood', 'Internal steel bracing'],
    colors: [
      { name: 'Terracotta Amber', hex: '#BA5D3F' },
      { name: 'Sand Boucle', hex: '#DED5C8' },
      { name: 'Forest Moss', hex: '#3B4D3C' }
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 128,
    isPopular: true,
    tag: 'Signature Piece'
  },
  {
    id: 'faw-boardroom-oak',
    name: 'Nordic Fluted Boardroom & Conference Table',
    category: 'tables',
    categoryLabel: 'Conference & Dining Tables',
    price: 28999,
    originalPrice: 42000,
    condition: 'Brand New',
    image: boardroomImg,
    description: 'Commanding presence for modern corporate boardrooms and open collaborative hubs. Featuring twin fluted architectural pedestals and a bevelled bullnose edge profile with integrated cable access troughs.',
    features: [
      'Spacious 8-foot (240cm) expansive surface seating 8-10 people',
      'Subtle brushed brass cable port covers with magnetic latches',
      'Reinforced structural steel sub-beam to prevent surface bowing',
      'Satin polyurethane protective finish resisting coffee and ink stains'
    ],
    dimensions: {
      height: '76 cm',
      width: '240 cm (8 Feet)',
      depth: '110 cm',
      weightCapacity: '350 kg'
    },
    materials: ['Fluted European White Oak veneer', 'MDF core', 'Brushed brass detailing'],
    colors: [
      { name: 'Smoked Oak', hex: '#54463A' },
      { name: 'Nordic Bleached Ash', hex: '#E0D7C6' }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 76,
    tag: 'Executive Prestige'
  },
  {
    id: 'faw-storage-steel',
    name: 'Aura Modular Steel Credenza & Showcase',
    category: 'storage',
    categoryLabel: 'Office Cupboard & Storage',
    price: 11999,
    originalPrice: 17500,
    condition: 'Brand New',
    image: storageCupboardImg,
    description: 'Clean architectural storage solution blending industrial cold-rolled steel with natural ribbed timber sliding facades. Features adjustable interior shelving, secure locking cylinder, and silent glide tracks.',
    features: [
      'CRCA heavy gauge Japanese steel with electrostatic powder coating',
      'Sliding ribbed fluted wood accent panels',
      '3 height-adjustable shelving tiers holding heavy box files',
      'Concealed anti-slam soft damper mechanisms'
    ],
    dimensions: {
      height: '105 cm',
      width: '140 cm',
      depth: '45 cm',
      weightCapacity: '220 kg'
    },
    materials: ['0.8mm CRCA cold-rolled steel', 'Natural fluted ash panels'],
    colors: [
      { name: 'Matte Anthracite & Oak', hex: '#232528' },
      { name: 'Pure White & Ash', hex: '#F0EFEA' }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 94,
    tag: 'Modular Storage'
  },
  {
    id: 'faw-teapoy-table',
    name: 'Atelier Minimalist Teapoy Coffee Table',
    category: 'tables',
    categoryLabel: 'Living & Lounge Tables',
    price: 4499,
    originalPrice: 6999,
    condition: 'Brand New',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    description: 'Organic rounded low-profile teapoy table crafted for executive waiting suites and living rooms. Minimalist pill silhouette that pairs effortlessly with our Vanguard armchair.',
    features: [
      'Smooth chamfered edges with child & pet safe rounded corners',
      'Solid conical tapered legs with brass-finished foot levellers',
      'Moisture resistant sealing against hot tea and beverages'
    ],
    dimensions: {
      height: '44 cm',
      width: '90 cm',
      depth: '55 cm',
      weightCapacity: '80 kg'
    },
    materials: ['Solid rubberwood core', 'Natural oak finish'],
    colors: [
      { name: 'Warm Oak', hex: '#D2B48C' },
      { name: 'Espresso Walnut', hex: '#3E2723' }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 142
  },
  {
    id: 'faw-refurb-boss-chair',
    name: 'Certified Refurbished Executive High-Back Leatherette Chair',
    category: 'chairs',
    categoryLabel: 'Executive Seating',
    price: 5999,
    originalPrice: 14000,
    condition: 'Certified Refurbished',
    image: 'https://images.unsplash.com/photo-1580481077195-c328a37db71a?auto=format&fit=crop&w=1200&q=80',
    description: 'Thoroughly refurbished premium director armchair with plush padded headrest, heavy butterfly tilt mechanism, and brand new automotive-grade black leatherette upholstery.',
    features: [
      '60% savings compared to brand new retail',
      'Full multi-point mechanical inspection in our Chennai workshop',
      'Fresh high-resilience foam and new breathable leatherette wrap',
      'Tested to withstand 140 kg with 6-month replacement warranty'
    ],
    dimensions: {
      height: '115 - 124 cm',
      width: '64 cm',
      depth: '68 cm',
      weightCapacity: '140 kg'
    },
    materials: ['Automotive grade PU leatherette', 'Chrome plated steel base'],
    colors: [
      { name: 'Executive Black', hex: '#111111' },
      { name: 'Rich Brown', hex: '#4E3629' }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 310,
    tag: '60% Off'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Arjun Swaminathan',
    role: 'Principal Architect',
    company: 'Atelier Studio Chennai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'We outfitted our 45-person design studio in Guindy entirely through Fawzaana Traders. The 4ft system workstations and AeroFlex mesh chairs struck the exact balance between clean Scandinavian aesthetics and intense daily ergonomic comfort.'
  },
  {
    id: 'test-2',
    name: 'Priya Rajendran',
    role: 'Head of Operations',
    company: 'FinVantage Tech Hub',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'Their refurbished table and chair combo saved our startup over ₹2.4 Lakhs without compromising an ounce of quality. When the pieces arrived at OMR, they looked practically fresh out of a luxury showroom.'
  },
  {
    id: 'test-3',
    name: 'Karthik Balakrishnan',
    role: 'Managing Director',
    company: 'Kaviarasu Logistics Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'The custom fluted conference table and executive terracotta armchairs are the first thing clients comment on when entering our boardroom. Exemplary craftsmanship and swift on-site installation.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of furniture do you offer at Fawzaana Traders?',
    answer: 'We provide end-to-end office and modern living furniture solutions. Our catalog covers ergonomic high-back task chairs, 4-foot modular system tables, conference boardroom suites, heavy-gauge steel storage cupboards, teapoy coffee tables, and both Brand New and Certified Refurbished inventory.'
  },
  {
    id: 'faq-2',
    question: 'Can I order online or request a custom quotation for our office floor?',
    answer: 'Yes! You can add products directly to your digital cart for instant ordering, or use our 1-click WhatsApp checkout to send your specifications directly to our Chennai sales desk. For bulk office fitouts (10 to 500+ workstations), our interior design team prepares complimentary 2D layouts and proforma quotes within 24 hours.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer customized dimensions, colors, and finishes?',
    answer: 'Absolutely. We operate our own dedicated fabrication and woodworking unit in Chennai. We can customize desk lengths (3ft, 4ft, 5ft, linear rows, back-to-back pods), steel powder-coat shades, laminate woodgrains, and premium fabric/mesh upholstery.'
  },
  {
    id: 'faq-4',
    question: 'How does your Certified Refurbished process work?',
    answer: 'Every pre-owned piece goes through an exhaustive 7-stage restoration protocol: deep industrial chemical sanitation, frame alignment check, replacement of worn pneumatic gas cylinders, high-density foam renewal, and fresh upholstery. You receive 95%+ aesthetic performance at up to 60% savings.'
  },
  {
    id: 'faq-5',
    question: 'What is your delivery timeline in Chennai and other states?',
    answer: 'We offer express 24 to 48-hour delivery within Chennai (Pincode 600089 and surrounding areas) with free on-site professional assembly. For Tamil Nadu, Bangalore, Hyderabad, and pan-India dispatches, shipments arrive in 3 to 6 business days with protective wooden pallet crating.'
  }
];

export const STATS = [
  { label: 'Clients Served', value: '10,000+' },
  { label: 'Awards Won', value: '14+' },
  { label: 'Project Rating', value: '4.9/5' },
  { label: 'Projects Completed', value: '2,800+' },
  { label: 'Years of Experience', value: '20+' }
];
