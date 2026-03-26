## JUDUL KARYA
SIBIGO - Belajar SIBI Secara Interaktif untuk Menciptakan Koneksi dan Komunikasi Inklusif

## Institusi
Politeknik Negeri Cilacap

## Anggota Tim
- Ketua: Adhitya Putra Arif Nugroho
- Anggota 1: Adinda Lailatul Musyarofah
- Anggota 2: Enzy Madona Ika Safitri

## Deskripsi Karya
**Latar Belakang:**

Bahasa isyarat adalah alat penting bagi penyandang tuli di Indonesia, karena bahasa lisan sering tidak dapat digunakan sepenuhnya. Saat ini, hanya sekitar 9% masyarakat disabilitas yang menggunakan SIBI, menunjukkan bahwa pengetahuan masyarakat luas terhadap bahasa isyarat masih sangat terbatas. SIBI dipilih sebagai fokus aplikasi SIBIGO karena strukturnya lebih dekat dengan bahasa Indonesia tertulis, sehingga lebih mudah dipelajari oleh pemula. Aplikasi ini dibuat sebagai platform edukatif untuk membantu masyarakat awam, tenaga pendidik, dan keluarga yang memiliki anggota disabilitas belajar SIBI secara interaktif, meningkatkan komunikasi inklusif, dan mendukung terciptanya masyarakat yang lebih peduli terhadap keberagaman komunikasi.

**Tujuan:**
- Menyediakan platform edukatif interaktif untuk belajar SIBI melalui aplikasi SIBIGO.
- Meningkatkan kemampuan masyarakat dalam komunikasi inklusif dengan komunitas Tuli.
- Menjadi sarana pembelajaran bahasa isyarat yang mudah diakses, terstruktur, dan menyenangkan.

**Manfaat:**
- Meningkatkan kesadaran masyarakat akan pentingnya bahasa isyarat.
- Mempermudah pembelajaran SIBI bagi pemula melalui SIBIGO.
- Mendorong inklusi sosial, sehingga masyarakat umum dapat berinteraksi lebih baik dengan komunitas Tuli.
- Memberikan akses edukasi digital bagi siapa saja yang ingin mengenal bahasa isyarat.

**Pemilihan Subtema:**
Pendidikan – karena aplikasi SIBIGO berfokus pada pembelajaran SIBI yang dapat diakses masyarakat umum, tenaga pendidik, dan keluarga dengan anggota disabilitas, sekaligus membangun kesadaran akan pentingnya komunikasi inklusif di masyarakat.

## 🔗 Link Website
[SIBIGO](https://sibigo.eyi.my.id/)

## 🛠️ Teknologi yang Digunakan
- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **AI Integration**: Google Generative AI (Gemini)
- **Content**: React Markdown

## 📁 Struktur Folder
```text
techsoft_polindra/
├── public/              # Aset publik statis
├── src/
│   ├── assets/          # Gambar, ikon, dan media lainnya
│   ├── components/      # Komponen UI yang dapat digunakan kembali
│   ├── data/            # Data statis aplikasi
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Komponen halaman utama
│   ├── App.jsx          # Konfigurasi routing utama
│   ├── App.css          # Konfigurasi Tailwind & gaya global
│   └── main.jsx         # Entry point aplikasi
├── .env                 # Variabel lingkungan (API Keys)
├── package.json         # Dependensi dan skrip proyek
└── vite.config.js       # Konfigurasi Vite
```

## 🚀 Cara Instalasi & Menjalankan Proyek

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18 ke atas direkomendasikan).

### 2. Instalasi
Clone repositori ini atau download source code-nya, lalu buka terminal di folder proyek dan jalankan:
```bash
npm install
```

### 3. Konfigurasi Environment
Salin file `.env.example` menjadi `.env` dan tambahkan API Key yang diperlukan (jika ada):
```bash
cp .env.example .env
```

### 4. Menjalankan Proyek (Development)
Untuk menjalankan server pengembangan lokal:
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173`.

### 5. Build untuk Produksi
Untuk melakukan build proyek:
```bash
npm run build
```

---

