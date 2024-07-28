"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrash } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteProduk } from "@/lib/actions";

export const CreateButton = () => {
  return (
    <Link
      href="/produks/create"
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={20} /> Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/produks/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteProdukWithId = deleteProduk.bind(null, id);
  return (
    <form action={DeleteProdukWithId}>
      <button className="rounded-sm border p-1 hover:bg-gray-100">
        <IoTrash size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );
  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "simpan" ? (
        <span>{pending ? "Menyimpan..." : "Simpan"}</span>
      ) : (
        <span>{pending ? "Mengubah..." : "Ubah"}</span>
      )}
    </button>
  );
};
