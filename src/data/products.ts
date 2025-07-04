export interface DigitalProduct {
  id: number;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
  features: {
    id: string[];
    en: string[];
  };
  price: string;
  originalPrice: string;
  buyLink: string; // Link ke platform penjualan
  category: 'ebook' | 'tool' | 'course';
  featured: boolean;
}

export const digitalProducts: DigitalProduct[] = [
  {
    id: 1,
    title: {
      id: 'Ebook Eksklusif',
      en: 'Exclusive Ebooks'
    },
    description: {
      id: 'Koleksi ebook eksklusif dengan panduan praktis untuk penulis.',
      en: 'Exclusive ebook collection with practical guides for writers.'
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`,
    features: {
      id: ['50+ Template Siap Pakai', 'Panduan Step-by-Step', 'Akses Seumur Hidup'],
      en: ['50+ Ready-to-Use Templates', 'Step-by-Step Guide', 'Lifetime Access']
    },
    price: 'Rp 199.000',
    originalPrice: 'Rp 299.000',
    buyLink: 'https://your-store.com/ebook-collection',
    category: 'ebook',
    featured: true
  },
  {
    id: 2,
    title: {
      id: 'Tool Cerita',
      en: 'Story Tool'
    },
    description: {
      id: 'Aplikasi web interaktif untuk membantu menulis cerita yang menarik.',
      en: 'Interactive web application to help write engaging stories.'
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
    </svg>`,
    features: {
      id: ['Generator Plot Otomatis', 'Karakter Builder', 'Timeline Manager'],
      en: ['Automatic Plot Generator', 'Character Builder', 'Timeline Manager']
    },
    price: 'Rp 99.000',
    originalPrice: 'Rp 149.000',
    buyLink: '/story-tool',
    category: 'tool',
    featured: true
  },
  {
    id: 3,
    title: {
      id: 'Kelas Online',
      en: 'Online Classes'
    },
    description: {
      id: 'Kelas online intensif untuk menguasai teknik menulis profesional.',
      en: 'Intensive online class to master professional writing techniques.'
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>`,
    features: {
      id: ['20 Jam Video', 'Sertifikat Resmi', 'Mentoring 1-on-1'],
      en: ['20 Hours Video', 'Official Certificate', '1-on-1 Mentoring']
    },
    price: 'Rp 499.000',
    originalPrice: 'Rp 799.000',
    buyLink: 'https://your-course-platform.com/writing-masterclass',
    category: 'course',
    featured: true
  }
  // Tambahkan produk digital baru di sini
];

export function getFeaturedProducts() {
  return digitalProducts.filter(product => product.featured);
}

export function getProductsByCategory(category: 'ebook' | 'tool' | 'course') {
  return digitalProducts.filter(product => product.category === category);
}

export function getAllProducts() {
  return digitalProducts;
}