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
      id: 'Panduan Menulis Kreatif',
      en: 'Creative Writing Guide'
    },
    description: {
      id: 'Buku panduan lengkap untuk mengembangkan kemampuan menulis kreatif Anda.',
      en: 'Complete guide to developing your creative writing skills.'
    },
    cover: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 49.000',
    rating: 4.8,
    buyLink: 'https://play.google.com/store/books/details?id=YOUR_BOOK_ID_1',
    featured: true
  },
  {
    id: 2,
    title: {
      id: 'Digital Marketing untuk Penulis',
      en: 'Digital Marketing for Authors'
    },
    description: {
      id: 'Strategi pemasaran digital yang efektif untuk penulis modern.',
      en: 'Effective digital marketing strategies for modern authors.'
    },
    cover: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    price: 'Rp 59.000',
    rating: 4.9,
    buyLink: 'https://play.google.com/store/books/details?id=YOUR_BOOK_ID_2',
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
  // Tambahkan buku baru di sini dengan format yang sama
];

export function getFeaturedBooks() {
  return books.filter(book => book.featured);
}

export function getAllBooks() {
  return books;
}