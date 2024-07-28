import ProdukTable from "@/components/ProdukTable";
import Search from "@/components/Search";
import { CreateButton } from "@/components/Buttons";

const Produks = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    // untuk pagination
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <CreateButton />
        <Search />
      </div>
      <ProdukTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Produks;
