Project ini digunakan menggunakan Next.JS

npx create-next-app@latest . => install Next Js di folder terkait
npm i -D prisma => menginstall prisma sebagai dependensi untuk menampilkan data dari database
npm i @prisma/client
npx prisma studio
npm i zod
npm i clsx
npm i use-debounce
cara untuk mendeploy => tambahkan baris kode "postinstall": "prisma generate" di package.json pada block kode "scripts"
