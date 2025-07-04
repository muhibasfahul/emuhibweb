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
      id: 'StreamHib',
      en: 'StreamHib'
    },
    description: {
      id: 'Tool Live Youtube dan facebook Web based.',
      en: 'ool Live Youtube dan facebook Web based.'
    },
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
  </svg>`,
    features: {
      id: ['Tak perlu sewa RDP lagi', 'Live 24/7 Loss', 'HP/Laptop Mati tetap Live'],
      en: ['No need to rent RDP anymore', 'Live 24/7 Loss', 'HP/Laptop is off but still Live']
    },
    price: 'Rp 200.000',
    originalPrice: 'Rp 299.000',
    buyLink: 'https://streamhib.com',
    category: 'toollive',
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
      id: 'Kelas online intensif untuk belajar Dapat Duit Dari Youtube.',
      en: 'Intensive online class to learn how to earn on Youtube.'
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
