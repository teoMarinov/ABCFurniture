import { SheetClose } from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryRowProps {
  title: string;
  options: string[];
}
const CategoryRow = ({ title, options }: CategoryRowProps) => {
  const titleNormalized = title.replace(/\s+/g, "-").toLocaleLowerCase();
  return (
    <div className="w-">
      <div className="flex items-center relative">
        <ChevronRight className="size-4 absolute -left-4 top-[5px]" />
        <h1 className="font-semibold underline cursor-pointer">
          <SheetClose asChild>
            <Link
              to={`products/${titleNormalized}`}
              className="w-fit cursor-pointer"
            >
              {title}
            </Link>
          </SheetClose>
        </h1>
      </div>
      {options.map((option) => (
        <div className="lg:text-sm text-sm my-4 ml-3" key={option}>
          <SheetClose asChild>
            <Link
              to={`products/${titleNormalized}/${option.replace(/\s+/g, "-")}`}
              className="w-fit cursor-pointer"
            >
              {option}
            </Link>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default CategoryRow;
