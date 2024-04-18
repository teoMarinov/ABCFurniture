import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ColContainerProps {
  title: string;
  options: string[];
}
const ColContainer = ({ title, options }: ColContainerProps) => {
  return (
    <div className="w-56">
      <div className="flex items-center relative">
        <ChevronRight className="size-4 absolute -left-4 top-[5px]" />
        <h1 className="font-semibold underline cursor-pointer">
          <Link
            to={`products/${title.replace(/\s+/g, "-").toLocaleLowerCase()}`}
            className="w-fit cursor-pointer"
          >
            {title}
          </Link>
        </h1>
      </div>
      {options.map((option) => (
        <div className="text-sm my-4">
          <Link
            to={`products/${title}/${option.replace(/\s+/g, "-")}`}
            className="w-fit cursor-pointer"
          >
            {option}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ColContainer;
