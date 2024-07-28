"use client";

import { editProduk } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/Buttons";
import type { Produk } from "@prisma/client";

const EditForm = ({ produk }: { produk: Produk }) => {
  const EditProdukWithId = editProduk.bind(null, produk.id);
  const [state, formAction] = useFormState(EditProdukWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-900"
          >
            Nama Produk
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Nama Produk"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            defaultValue={produk.nama}
          />
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="deskripsi"
            className="block text-sm font-medium text-gray-900"
          >
            Deskripsi
          </label>
          <input
            type="text"
            name="deskripsi"
            id="deskripsi"
            placeholder="Deskripsi"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            defaultValue={produk.deskripsi}
          />
          <div id="deskripsi-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.deskripsi}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga"
            className="block text-sm font-medium text-gray-900"
          >
            Harga
          </label>
          <input
            type="text"
            name="harga"
            id="harga"
            placeholder="Harga"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            defaultValue={produk.harga}
          />
          <div id="harga-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.harga}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="stok"
            className="block text-sm font-medium text-gray-900"
          >
            Stok
          </label>
          <input
            type="text"
            name="stok"
            id="stok"
            placeholder="Stok"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            defaultValue={produk.stok}
          />
          <div id="stok-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.stok}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Ubah" />
      </form>
    </div>
  );
};

export default EditForm;
