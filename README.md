# AWS Resto

**Catalogue Restaurant** - AWS Resto merupakan aplikasi yang menampilkan daftar restoran menggunakan API https://restaurant-api.dicoding.dev. Dibuat untuk memenuhi syarat kelulusan kelas [Menjadi Front-End Developer Expert](https://www.dicoding.com/academies/219) di Dicoding Academy

![Author](https://img.shields.io/badge/made%20by-Ardywsptr-blue)
![GitHub followers](https://img.shields.io/github/followers/Ardywsptr?style=social)
![GitHub watches](https://img.shields.io/github/stars/Ardywsptr/AWSResto_Submission-3?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/Ardywsptr/AWSResto_Submission-3)

<br clear="both">

## User Interface :

<br clear="both">

<div align="center">
<img src="https://i.postimg.cc/wjgZHJ1g/Minimalist-Website-Launch-Tablet-Phone-Mockup-Instagram-Post.png" alt"AWSResto" width="800">
</div>

<br clear="both">

## Feature :


* **Menampilkan Daftar Restoran**,
Anda dapat melihat daftar restoran pada halaman home, dan memilih salah satu atau lain nya untuk melihat detail dan menambahkan nya sebagai favorit.

* **Menampilkan Detail Restoran**,
Ketika anda klik nama restoran anda akan diarahkan ke halaman detail yang berisi informasi lengkap dari restoran tersebut mulai dari nama, alamat, deskripsi, menu, rating dan ulasan dari pelanggan lain.

* **Meyimpan Dan Menghapus Restoran Favorit**,
Anda dapat menyimpan dan menghapus restoran favorit Anda dengan satu klik, restorarn favorit Anda akan ditampilkan pada halaman favorit.

* **Cari Restoran Favorit**,
Jangan khawatir ketika ada banyak restoran yang anda favoritkan dan ingin salah satunya dengan cepat, Anda dapat mencari nya hanya dengan mengetikan keyword nama restoran yang ingin anda cari.

* **Responsibilitas Tampilan**,
Tampilan web app sudah responsif dari berbagai ukuran layar mulai dari mobile, tablet, laptop ataupun dekstop.

* **Aksebilitas Website**,
Seluruh fungsionalitas website app dapat dilakukan dengan menggunakan keyboard dan terbaca oleh screen readerr. Contohnya mengakses detail dari restoran menggunakan tab untuk navigasi dan enter untuk memilih restoran yang ingin diakses ke halaman detail.

* **Optimasi Website**,
Aplikasi mendapat skor yang cukup baik ketika pada tampilan dekstop ataupun mobile, bisa dilihat menggunakan lighthouse.

* **Install Aplikasi**,
Anda dapat meng-install aplikasi ini hanya dengan satu klik tanpa harus kerepotan untuk mengetikan url ketika ingin membuka nya kembali.

* **Tersedia Secara Offline**,
Aplikasi dapat diakses dalam keadaan offline tanpa koneksi internet dan aset yang gagal dimuat (pastikan Anda telah memuat web minimal 1 kali sebelumnya).

<br clear="both">

## Webpack bundle :

Web app ini dibuat dengan menggunakan JavaScript *bundler* **Webpack** dengan berbagai teknologi yang di pakai, antara lain :

1. *PWA - Progressive Web Application* dengan menggunakan `Workbox-InjectManifest` dan `WebpackPwaManifest`
2. *Responsivitas dan optimasi gambar* dengan menggunakan `responsive-loader`.
3. *Minifikasi CSS* dengan menggunakan `MiniCssExtractPlugin` dan `CssMinimizerPlugin`.
4. *Preload* assets untuk mempercepat pemuatan file-file krusial dengan menggunakan `HtmlWebpackInjectPreload`.
5. *Transpiling* dengan menggunakan `babal-loader`.
6. *Integration Testing* menggunakan `karma-jasmine`.
7. *End To End Testing* menggunakan `codeceptjs`.
8. *Code Quality* menggunakan `ESLint` sebagai linter ketika menuliskan kode JavaScript.
9. *Dan lainnya yang ada pada berkas*`package.json`.

<br clear="both">

## Development vs Build Production

*Webpack config* untuk *development* dibuat agar dapat dengan cepat me-reload saat terjadi perubahan pada suatu file, sehingga tidak semua plugin, loader, dan fitur disertakan di dalam konfigurasi tersebut. Untuk melihat susunan konfigurasi yang digunakan, silahkan lihat tabel di bawah ini :

### Loader dan Plugin

| Loader/Plugin              | Development | Production |
| -------------------------- | :---------: | :--------: |
| `HtmlWebpackPlugin`        | ✔          | ✔          |
| `responsive-loader`        | ✔          | ✔          |
| `sass-loader`              | ✔          | ✔          |
| `css-loader`               | ✔          | ✔          |
| `style-loader`             | ✔          | ❌          |
| `MiniCssExtractPlugin`     | ❌          | ✔          |
| `babel-loader`             | ❌          | ✔          |
| `BundleAnalyzerPlugin`     | ❌          | ✔          |
| `HtmlWebpackInjectPreload` | ❌          | ✔          |
| `WebpackPwaManifest`       | ❌          | ✔          |
| `InjectManifest`           | ❌          | ✔          |
| `CssMinimizerPlugin`       | ❌          | ✔          |
  
### Feature

| Feature           | Development | Production |
| ----------------- | :---------: | :--------: |
| `Image Optimizer` | ✔           | ✔          |
| `Service Worker`  | ❌          | ✔          |
| `Web Manifest`    | ❌          | ✔          |
| `Split chunks`    | ❌          | ✔          |
| `PWA`             | ❌          | ✔          |

<br clear="both">

## Usage NPM

*Untuk memulai, Install npm lalu jalankan beberapa perintah di bawah ini untuk memulainya, folder dist akan dibuat setelah itu.*

1. Install NPM
   
   `npm install`
   
   > Pastikan koneksi internet anda stabil sehingga tidak ada resiko gagal install.

2. Build untuk distribusi production

   `npm run build`
   
3. Build Image
 
    `npm run build-iamge`

4. Starting development server

   `npm run start-dev`

   > Untuk memastikan development berjalan dengan baik pastikan cache pada browser anda sudah dibersihkan.

5. Integration testing

   `npm run test`

6. End to End (E2E) testing

   `npm run e2e`

   > Sebelum memulai e2e test, server development harus dijalankan dan pastikan internet anda menyala.

7. Starting production server

   `npm run serve`

   > Sebelum memulai server production sebaiknya dilakukan build dan testing terlebih dahulu.

<br clear="both">

## Integration Testing

Test case like dan unlike restoran yang digunakan untuk melakukan *integration test*.

### Alur Use Case:
1. Tampilkan halaman restaurant.
2. Bila restaurant ini belum disukai, tampilkan widget untuk menyukai restaurant. Widget ini berbentuk hati kosong.
3. Bila restaurant sudah disukai, tampilkan widget berbentuk hati penuh. Pengguna dapat membatalkan kesukaannya pada restaurant ini.
4. Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate.

### Skenario Menyukai Restaurant:
1. Restaurant belum disukai.
2. Widget untuk menyukai restaurant ditampilkan.
3. Widget menyukai restaurant ditekan oleh pengguna.
4. Restaurant ditambahkan ke daftar restaurant yang disukai :
    - Ternyata restaurant sudah disukai:
        - Tidak perlu menyimpan kembali.
    
    - Data restaurant tidak memiliki ID:
        - Sistem tidak memproses penyimpanan.
        - Sistem tidak gagal.

### Skenario Batal Menyukai Restaurant:
1. Restaurant sudah disukai.
2. Widget untuk batal menyukai restaurant ditampilkan.
3. Widget pembatalan ditekan oleh pengguna.
4. Restaurant dihapus dari daftar restaurant yang disukai.
    - Ternyata restaurant tidak ada dalam daftar restaurant yang disukai.
    
### Keterangan:
- Alur positif dapat dilihat pada poin berangka.
- Alur negatif dapat dilihat pada poin huruf.

<br clear="both">

## End To End (E2E) Testing
### Memfavoritkan suatu restaurant

1. *User* membuka halaman daftar favorite resto.
2. *User* melihat pesan bahwa daftar favorite kosong.
3. *User* membuka halaman home.
4. *User* melihat daftar restaurant.
5. *User* mengklik restaurant yang ada pada urutan pertama.
6. *User* melihat halaman detail restaurant pertama.
7. *User* melihat tombol favorit.
8. *User* menekan tombol favorit.
9. *User* melihat snackbar berisi pemberitahuan resto berhasil ditambahkan ke favorite.
10. *User* membuka halaman daftar favorite.
11. *User* melihat restaurant yang ditambahkan tadi ada di daftar favorit.

### Berhenti memfavoritkan suatu restaurant

1. *User* membuka halaman home.
2. *User* melihat daftar restaurant.
3. *User* mengklik restaurant yang ada pada urutan pertama.
4. *User* melihat tombol favorit.
5. *User* menekan tombol favorit.
6. *User* membuka halaman daftar favorite.
7. *User* melihat restaurant yang ditambahkan tadi di daftar favorit.
8. *User* mengklik restaurant yang difavoritkan tadi.
9. *User* melihat tombol unfavorited.
10. *User* mengklik tombol unfavorited.
11. *User* melihat snackbar berisi pemberitahuan resto berhasil dihapus dari favorite.
12. *User* membuka halaman daftar favorit.
13. *User* sekarang melihat bahwa daftar favorit restaurant kosong.


<br clear="both">

## 📃 Keterangan

Repositori ini adalah submission dari Dicoding untuk kelas Menjadi Web Developer Expert. Kelas ini memiliki total 3 submission yang harus diselesaikan untuk mendapatkan sertifikat. Isi dari repositori ini merupakan bagian final yang mencakup submission ke 1 dan 2.

> **_PERINGATAN: Jadikan repo ini sebagai rujukan/referensi._**
>
> - Sesuai dengan terms of use di Dicoding, submission kelas Dicoding Academy haruslah hasil karya Anda sendiri.
>
> - Kode yang didapatkan dari sumber lain (website, buku, forum, GitHub, dan lain-lain) hanya digunakan sebagai referensi. Tingkat kesamaannya tidak boleh lebih dari 70%.

### Submission 1️⃣: Katalog Restoran

Anda dapat melihat dan mendownload source code dari submission 1 di [link ini](https://github.com/Ardywsptr/AWSResto_Submission-3/releases/tag/v1.0)

### Submission 2️⃣: Katalog Restoran + PWA

Anda dapat melihat dan mendownload source code dari submission 2 di [link ini](https://github.com/Ardywsptr/AWSResto_Submission-3/releases/tag/v1.1)

### Submission 3️⃣: Katalog Restoran + PWA + Testing and Performance Optimized

Anda dapat melihat dan mendownload source code dari submission 3 di [link ini](https://github.com/Ardywsptr/AWSResto_Submission-3/releases/tag/v1.2)



> Untuk melihat semua daftar releases, kunjungi [releases](https://github.com/Ardywsptr/AWSResto_Submission-3/releases)
>
> Jika ada pertanyaan atau issue, kunjungi [new issue](https://github.com/Ardywsptr/AWSResto_Submission-3/issues/new)

Big Thanks for [Dicoding](https://www.dicoding.com/)
