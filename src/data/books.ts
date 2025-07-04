export interface Book {
  id: number;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  cover: string;
  price: string;
  rating: number;
  buyLink: string; // Link ke Google Play Books atau platform lain
  featured: boolean; // Untuk menentukan apakah ditampilkan di homepage
}

export const books: Book[] = [
  {
    id: 1,
    title: {
      id: 'Ketika Senja Berkata Cinta',
      en: 'Ketika Senja Berkata Cinta'
    },
    description: {
      id: 'Novel Cinta Di Pesantren, Zaman Sebelum ada Handphone, Terinspirasi dari Kisah Nyata.',
      en: 'Novel Cinta Di Pesantren, Zaman Sebelum ada Handphone, Terinspirasi dari Kisah Nyata.'
    },
    cover: 'https://play.google.com/books/publisher/content/images/frontcover/_hi4DwAAQBAJ?fife=w240-h345?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 69.000',
    rating: 4.9,
    buyLink: 'https://play.google.com/store/books/details?id=_hi4DwAAQBAJ',
    featured: true
  },
  {
    id: 2,
    title: {
      id: 'Auto Duit dari YouTube: Musik AI Bikin Kamu Tajir',
      en: 'Auto Duit dari YouTube: Musik AI Bikin Kamu Tajir'
    },
    description: {
      id: 'Ebook ini membahas bagaimana cara menjadi seorang youtuber konten musik meskipun Anda bukan seorang musisi, semua dikerjakan dengan bantuan AI dan sudah terbukti lolos monetisasi.',
      en: 'Ebook ini membahas bagaimana cara menjadi seorang youtuber konten musik meskipun Anda bukan seorang musisi, semua dikerjakan dengan bantuan AI dan sudah terbukti lolos monetisasi.'
    },
    cover: 'https://cdn.lynkid.my.id/products/02-07-2025/1751459678092_7076395.webp?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 149.000',
    rating: 5,
    buyLink: 'https://lynk.id/a/3672289242/l97z2e51445d',
    featured: true
  },
  {
    id: 3,
    title: {
      id: 'Storytelling dalam Era Digital',
      en: 'Storytelling in Digital Age'
    },
    description: {
      id: 'Cara bercerita yang menarik di era digital dan media sosial.',
      en: 'Engaging storytelling in the digital and social media age.'
    },
    cover: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 69.000',
    rating: 4.7,
    buyLink: 'https://play.google.com/store/books/details?id=YOUR_BOOK_ID_3',
    featured: true
  }
  {
    id: 4,
    title: {
      id: '5 Rahasia Keluarga Sakinah Mawaddah Warrohmah',
      en: '5 Rahasia Keluarga Sakinah Mawaddah Warrohmah'
    },
    description: {
      id: 'Ada 5 hal menjadi cobaan yang akan datang untuk menggoncangkan bahkan membubarkan rumah tangga seseorang setelah menikah.',
      en: 'There are 5 things that will become trials that will come to shake or even dissolve a persons household after marriage.'
    },
    cover: 'https://play.google.com/books/publisher/content/images/frontcover/vjPlDwAAQBAJ?fife=w240-h345?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 22.200',
    rating: 5,
    buyLink: 'https://play.google.com/store/books/details?id=vjPlDwAAQBAJ',
    featured: true
  },
];

export function getFeaturedBooks() {
  return books.filter(book => book.featured);
}

export function getAllBooks() {
  return books;
}
