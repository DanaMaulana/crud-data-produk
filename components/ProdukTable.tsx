import { getProduks } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "./Buttons";

const ProdukTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const produks = await getProduks(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">No</th>
          <th className="py-3 px-6">Name Produk</th>
          <th className="py-3 px-6">Deskripsi</th>
          <th className="py-3 px-6">Harga</th>
          <th className="py-3 px-6">Stok</th>
          <th className="py-3 px-6">Created</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {produks.map((produk, index) => (
          <tr key={produk.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{produk.nama}</td>
            <td className="py-3 px-6">{produk.deskripsi}</td>
            <td className="py-3 px-6">{produk.harga}</td>
            <td className="py-3 px-6">{produk.stok}</td>
            <td className="py-3 px-6">
              {formatDate(produk.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={produk.id} />
              <DeleteButton id={produk.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProdukTable;
