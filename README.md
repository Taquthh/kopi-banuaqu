<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6F4E37,100:C68B59&height=200&section=header&text=Kopi%20Banua&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Landing%20Page%20UMKM%20Kopi%20Khas%20Banua&descAlignY=60&descSize=18" alt="Banner Kopi Banua" />

<a href="https://kopi-banuaqu.vercel.app/">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=C68B59&center=true&vCenter=true&width=600&lines=☕+Seduh+kehangatan+khas+Banua;🛒+Pesan+langsung+lewat+WhatsApp;🌙+Mode+gelap+%26+terang;📍+Handil+Bakti%2C+Barito+Kuala" alt="Typing SVG" />
</a>

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-kopi--banuaqu.vercel.app-6F4E37?style=for-the-badge)](https://kopi-banuaqu.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Taquthh%2Fkopi--banuaqu-181717?style=for-the-badge&logo=github)](https://github.com/Taquthh/kopi-banuaqu)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)
![WhatsApp](https://img.shields.io/badge/Order_via-WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)

**[🚀 Lihat Demo](https://kopi-banuaqu.vercel.app/)** · **[📂 Source Code](https://github.com/Taquthh/kopi-banuaqu)** · **[🐛 Laporkan Masalah](https://github.com/Taquthh/kopi-banuaqu/issues)**

</div>

---

## 📖 Tentang Proyek

**Kopi Banua** adalah landing page untuk UMKM kopi yang dibuat sebagai **Tugas 1 mata kuliah Pemrograman Web 1**, S1 Sistem Informasi, Fakultas Teknologi Informasi, UNISKA MAB.

Website ini dibangun dengan **HTML, CSS, dan JavaScript murni** (tanpa framework) dan menghadirkan pengalaman belanja yang lengkap, mulai dari melihat menu, memasukkan ke keranjang, sampai checkout langsung ke WhatsApp penjual.

---

## ✨ Fitur Unggulan

<table>
<tr>
<td width="50%" valign="top">

### 🧭 Navigasi Pintar

- Navbar lengket (_sticky_)
- Menu hamburger untuk mobile
- _Scrollspy_ menandai bagian aktif
- Bilah progres baca

### 🎨 Tampilan & Interaksi

- 🌗 Mode gelap/terang (tersimpan)
- ⌨️ Efek mengetik (_typewriter_)
- 🔢 Angka berhitung animasi
- 🕒 Status **buka/tutup real-time** (WITA)

</td>
<td width="50%" valign="top">

### 🛍️ Belanja Mudah

- Menu dengan **pencarian** dan **filter**
- Keranjang belanja
- **Checkout via WhatsApp**
- Form pesanan dengan validasi
- Estimasi harga otomatis

### 🖼️ Konten Visual

- Galeri dengan _lightbox_
- Video proses sangrai
- Slider testimoni
- Peta lokasi interaktif

</td>
</tr>
</table>

<details>
<summary><b>📋 Lihat daftar fitur lengkap</b></summary>

<br/>

| No  | Fitur        | Keterangan                                                      |
| :-: | ------------ | --------------------------------------------------------------- |
|  1  | Navigasi     | Lengket, menu hamburger, scrollspy, progres baca                |
|  2  | Tema         | Mode gelap/terang yang tersimpan                                |
|  3  | Animasi      | Efek ketik, status buka/tutup real-time (WITA), angka berhitung |
|  4  | Menu         | Pencarian, filter, keranjang, checkout WhatsApp                 |
|  5  | Galeri       | Lightbox, video sangrai, slider testimoni                       |
|  6  | Form Pesanan | Validasi, estimasi harga, kirim ke WhatsApp                     |
|  7  | Lokasi       | Peta Komplek Griya Annisah, Handil Bakti, Barito Kuala          |

</details>

---

## 🔄 Alur Pemesanan

```mermaid
flowchart LR
    A([🏠 Buka Website]) --> B[☕ Jelajahi Menu]
    B --> C{Cari / Filter}
    C --> D[🛒 Tambah ke Keranjang]
    D --> E[📝 Isi Form Pesanan]
    E --> F[💰 Lihat Estimasi Harga]
    F --> G([💬 Kirim ke WhatsApp])

    style A fill:#6F4E37,color:#fff,stroke:none
    style G fill:#25D366,color:#fff,stroke:none
```

---

## 🛠️ Teknologi

| Teknologi                                                                                      | Kegunaan                       |
| ---------------------------------------------------------------------------------------------- | ------------------------------ |
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)                | Struktur halaman               |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)                   | Styling, tema, dan animasi     |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | Interaksi, keranjang, validasi |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel)                             | Hosting dan deployment         |
| ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github)                             | Version control                |

---

## 📁 Struktur Proyek

```text
kopi-banuaqu/
├── 📄 index.html        # Halaman utama
├── 📂 css/
│   └── 🎨 style.css     # Seluruh gaya dan tema
├── 📂 js/
│   └── ⚙️ script.js     # Logika interaksi
├── 📂 img/              # Aset gambar
└── 📂 dokumentasi/      # Dokumentasi tugas
```

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Clone repositori
git clone https://github.com/Taquthh/kopi-banuaqu.git

# 2. Masuk ke folder
cd kopi-banuaqu

# 3. Buka index.html di browser
#    atau gunakan Live Server (VS Code) agar auto-reload
```

> 💡 **Tip:** Tidak perlu instalasi apa pun. Cukup buka `index.html` di browser.

---

## 👨‍💻 Pembuat

<div align="center">

|                   |                                          |
| :---------------- | :--------------------------------------- |
| **Nama**          | Quthbi Nor Fadillah                      |
| **NPM**           | 2510020089                               |
| **Program Studi** | S1 Sistem Informasi                      |
| **Kampus**        | Fakultas Teknologi Informasi, UNISKA MAB |
| **Mata Kuliah**   | Pemrograman Web 1                        |

[![GitHub](https://img.shields.io/badge/GitHub-Taquthh-181717?style=for-the-badge&logo=github)](https://github.com/Taquthh)

</div>

---

<div align="center">

**Dibuat dengan ☕ dan ❤️ di Banua**

⭐ Jika proyek ini bermanfaat, beri bintang di GitHub!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C68B59,100:6F4E37&height=100&section=footer" alt="Footer" />

</div>
