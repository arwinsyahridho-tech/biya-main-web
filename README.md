# BIYA Main Web

Website utama dan portal produk resmi **BIYA.COM**. Repository ini berisi company profile, pengenalan ekosistem produk BIYA, landing page BOS F&B, dan halaman kontak/request demo.

> Aplikasi operasional BOS F&B **tidak** berada di repository ini. Dashboard dan seluruh modul aplikasi dikembangkan terpisah di repository `bos-fnb`.

## Struktur halaman

- `index.html` — landing page utama BIYA
- `about.html` — company profile dan nilai BIYA
- `products.html` — daftar produk dan layanan BIYA
- `bos-fnb.html` — landing page produk BOS F&B
- `contact.html` — kontak dan request demo
- `assets/css/style.css` — design system dan responsive styling
- `assets/js/main.js` — navigasi mobile, reveal animation, dan interaksi form demo

## Menjalankan secara lokal

Website menggunakan HTML, CSS, dan JavaScript vanilla tanpa build step.

```bash
python3 -m http.server 8000
```

Buka [http://localhost:8000](http://localhost:8000) di browser. Website juga dapat dibuka langsung melalui `index.html`, tetapi local server direkomendasikan.

## Placeholder link

Link aplikasi BOS F&B, Account Center, WhatsApp, dan email masih menggunakan placeholder `#TODO-*`. Ganti placeholder tersebut setelah URL production tersedia.
