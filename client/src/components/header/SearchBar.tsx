import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = () => {
  return (
    <div className="relative">
      <Input className="w-full rounded-full" />
      <div className="h-full w-12 rounded-r-full flex items-center justify-center absolute top-0 right-0 transition hover:bg-neutral-200">
        <MagnifyingGlassIcon className="h-6 w-6 z-50" />
      </div>
    </div>
  );
};

export default SearchBar;
