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
    'hero.title': 'Asfahul Muhib',
    'hero.subtitle': 'Penikmat air putih hangat di tengah malam. Jiwanya senang menulis, Hobinya main internet, Kuliahnya pendidikan agama islam, Kursusnya bahasa Inggris. Gak ada yang nyambung!!! Semoga Allah selalu meridhoi Perjalananya.',
    'hero.cta': 'Temukan Kebutuhanmu',
    'books.title': 'Karya Pilihan',
    'books.cta': 'Beli',
    'products.title': 'Produk Digital Unggulan',
    'products.ebook': 'Ebook Eksklusif',
    'products.story-tool': 'Tool Cerita',
    'products.online-class': 'Kelas Online',
    'testimonials.title': 'Testimoni',
    'newsletter.title': 'Dapatkan Update Terbaru',
    'newsletter.subtitle': 'Berlangganan newsletter untuk mendapatkan update terbaru',
    'newsletter.placeholder': 'Masukkan email Anda',
    'newsletter.cta': 'Berlangganan',
    'footer.copyright': '© 2025 Penulis & Art Tech Practice. Semua hak dilindungi.',
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
    'hero.title': 'Asfahul Muhib',
    'hero.subtitle': 'A connoisseur of warm water in the middle of the night. His soul loves to write, His hobby is playing the internet, His lectures are Islamic religious education, His courses are English. Nothing connects!!! May Allah always bless his journey.',
    'hero.cta': 'Explore You Need',
    'books.title': 'Featured Works',
    'books.cta': 'Buy Books',
    'products.title': 'Featured Digital Products',
    'products.ebook': 'Exclusive Ebooks',
    'products.story-tool': 'Story Tool',
    'products.online-class': 'Online Classes',
    'testimonials.title': 'Testimonials',
    'newsletter.title': 'Get Latest Updates',
    'newsletter.subtitle': 'Subscribe to newsletter for latest works',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.cta': 'Subscribe',
    'footer.copyright': '© 2025 Author. All rights reserved.',
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
