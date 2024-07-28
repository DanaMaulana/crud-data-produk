import EditForm from "@/components/EditForm";
import { getProdukById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateProdukPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  // untuk data fetching
  const produk = await getProdukById(id);

  // validasi
  if (!produk) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center my-20">Ubah Data Produk</h1>
      <EditForm produk={produk} />
    </div>
  );
};

export default UpdateProdukPage;
