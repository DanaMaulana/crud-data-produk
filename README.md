# CRUD Data Produk

Aplikasi ini adalah aplikasi CRUD sederhana untuk mengelola data produk menggunakan Next.js, Prisma, dan TailwindCSS.

## Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/DanaMaulana/crud-data-produk.git
   cd crud-data-produk
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` di root direktori dan tambahkan konfigurasi berikut:

   ```plaintext
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

4. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

5. Jalankan migrasi database:
   ```bash
   npx prisma migrate dev --name init
   ```

## Menjalankan Aplikasi

1. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

2. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.
