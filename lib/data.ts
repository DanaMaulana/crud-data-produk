// data fetching
import { prisma } from "@/lib/prisma";

export const getProduks = async (query: string, currentPage: number) => {
  try {
    const produks = await prisma.produk.findMany({
      where: {
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            deskripsi: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            harga: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            stok: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return produks;
  } catch (error) {
    throw new Error("Gagal mengambil data produk.");
  }
};

export const getProdukById = async (id: string) => {
  try {
    const produk = await prisma.produk.findUnique({
      where: { id },
    });
    return produk;
  } catch (error) {
    throw new Error("Gagal mengambil data produk.");
  }
};
