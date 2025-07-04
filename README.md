# Website Penulis Digital

Website pribadi untuk penulis dan platform penjualan produk digital dengan dukungan multilingual (Indonesia/English) dan dark mode.

## 🚀 Fitur Utama

- **Multilingual**: Dukungan Bahasa Indonesia dan English
- **Dark Mode**: Toggle light/dark mode dengan localStorage
- **Responsive Design**: Optimal di semua perangkat
- **SEO Optimized**: Meta tags, Open Graph, dan struktur URL yang bersih
- **High Performance**: Dibangun dengan Astro untuk loading yang cepat
- **AIDA Framework**: Desain yang fokus pada konversi

## 📁 Struktur Proyek

```
src/
├── components/          # Komponen UI
├── data/               # Data konfigurasi dan produk
│   ├── books.ts        # Data buku/karya
│   ├── products.ts     # Data produk digital
│   └── config.ts       # Konfigurasi website
├── layouts/            # Layout template
├── pages/              # Halaman website
└── utils/              # Utility functions
```

## 🛠️ Cara Mengelola Konten

### Menambah Buku Baru

Edit file `src/data/books.ts`:

```typescript
{
  id: 4, // ID unik
  title: {
    id: 'Judul Buku Indonesia',
    en: 'English Book Title'
  },
  description: {
    id: 'Deskripsi dalam bahasa Indonesia',
    en: 'Description in English'
  },
  cover: 'https://link-to-cover-image.jpg',
  price: 'Rp 79.000',
  rating: 4.5,
  buyLink: 'https://play.google.com/store/books/details?id=YOUR_BOOK_ID',
  featured: true // true untuk tampil di homepage
}
```

### Menambah Produk Digital

Edit file `src/data/products.ts`:

```typescript
{
  id: 4,
  title: {
    id: 'Nama Produk Indonesia',
    en: 'English Product Name'
  },
  description: {
    id: 'Deskripsi produk dalam bahasa Indonesia',
    en: 'Product description in English'
  },
  icon: `<svg>...</svg>`, // SVG icon
  features: {
    id: ['Fitur 1', 'Fitur 2', 'Fitur 3'],
    en: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  price: 'Rp 299.000',
  originalPrice: 'Rp 399.000',
  buyLink: 'https://your-store.com/product',
  category: 'ebook', // 'ebook', 'tool', atau 'course'
  featured: true
}
```

### Mengubah Konfigurasi Website

Edit file `src/data/config.ts`:

```typescript
export const siteConfig = {
  siteName: 'Nama Website Anda',
  author: 'Nama Anda',
  email: 'email@anda.com',
  
  socialLinks: {
    twitter: 'https://twitter.com/username',
    facebook: 'https://facebook.com/username',
    // ... social media links lainnya
  },
  
  tools: {
    storyTool: '/story-tool', // Link ke tool cerita
    murottalTool: '/murottal-tool' // Link ke tool murottal
  },
  
  newsletterAction: 'https://your-newsletter-service.com/subscribe'
};
```

## 🎨 Kustomisasi

### Warna
Edit `tailwind.config.mjs` untuk mengubah skema warna:

```javascript
colors: {
  primary: { /* warna utama */ },
  secondary: { /* warna sekunder */ },
  accent: { /* warna aksen */ }
}
```

### Font
Ganti font di `src/layouts/Layout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🚀 Deployment

Website ini siap untuk di-deploy ke platform seperti:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## 📝 Catatan Penting

1. **Link Aktif**: Semua tombol dan link sudah aktif dan mengarah ke URL yang dapat dikustomisasi
2. **SEO Ready**: Meta tags dan struktur URL sudah dioptimalkan
3. **Responsive**: Desain responsif untuk semua ukuran layar
4. **Performance**: Optimized untuk kecepatan loading
5. **Accessibility**: Mengikuti standar aksesibilitas web

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📞 Support

Jika ada pertanyaan atau butuh bantuan kustomisasi, silakan hubungi melalui email yang tercantum di konfigurasi website.