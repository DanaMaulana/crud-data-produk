"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProdukSchema = z.object({
  nama: z.string().min(3),
  deskripsi: z.string().min(3),
  harga: z.string().min(3),
  stok: z.string().min(1),
});

export const simpanProduk = async (prevState: any, formData: FormData) => {
  const validatedFields = ProdukSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.produk.create({
      data: {
        nama: validatedFields.data.nama,
        deskripsi: validatedFields.data.deskripsi,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
      },
    });
  } catch (error) {
    return { message: "Gagal menambahkan produk." };
  }
  revalidatePath("/produks");
  redirect("/produks");
};

export const editProduk = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validatedFields = ProdukSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.produk.update({
      data: {
        nama: validatedFields.data.nama,
        deskripsi: validatedFields.data.deskripsi,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Gagal edit produk." };
  }
  revalidatePath("/produks");
  redirect("/produks");
};

export const deleteProduk = async (id: string) => {
  try {
    await prisma.produk.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Gagal delete produk." };
  }
  revalidatePath("/produks");
};
