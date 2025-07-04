export const languages = {
  id: 'Indonesian',
  en: 'English',
};

export const defaultLang = 'id';

export const ui = {
  id: {
    'nav.home': 'Beranda',
    'nav.books': 'Buku/Karya',
    'nav.products': 'Produk Digital',
    'nav.about': 'Tentang Saya',
    'nav.contact': 'Kontak',
    'nav.story-tool': 'Tool Cerita',
    'nav.murottal-tool': 'Tool Murottal',
    'hero.title': 'Penulis & Inovator Digital',
    'hero.subtitle': 'Menciptakan karya yang menginspirasi dan mengubah hidup melalui kata-kata dan teknologi',
    'hero.cta': 'Jelajahi Karya Saya',
    'books.title': 'Karya Pilihan',
    'books.cta': 'Beli di Google Play Books',
    'products.title': 'Produk Digital Unggulan',
    'products.ebook': 'Ebook Eksklusif',
    'products.story-tool': 'Tool Cerita',
    'products.online-class': 'Kelas Online',
    'testimonials.title': 'Testimoni',
    'newsletter.title': 'Dapatkan Update Terbaru',
    'newsletter.subtitle': 'Berlangganan newsletter untuk mendapatkan update karya terbaru dan tips menulis',
    'newsletter.placeholder': 'Masukkan email Anda',
    'newsletter.cta': 'Berlangganan',
    'footer.copyright': '© 2024 Penulis Digital. Semua hak dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
  },
  en: {
    'nav.home': 'Home',
    'nav.books': 'Books/Works',
    'nav.products': 'Digital Products',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    'nav.story-tool': 'Story Tool',
    'nav.murottal-tool': 'Murottal Tool',
    'hero.title': 'Author & Digital Innovator',
    'hero.subtitle': 'Creating inspiring works that change lives through words and technology',
    'hero.cta': 'Explore My Works',
    'books.title': 'Featured Works',
    'books.cta': 'Buy on Google Play Books',
    'products.title': 'Featured Digital Products',
    'products.ebook': 'Exclusive Ebooks',
    'products.story-tool': 'Story Tool',
    'products.online-class': 'Online Classes',
    'testimonials.title': 'Testimonials',
    'newsletter.title': 'Get Latest Updates',
    'newsletter.subtitle': 'Subscribe to newsletter for latest works and writing tips',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.cta': 'Subscribe',
    'footer.copyright': '© 2024 Digital Author. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}