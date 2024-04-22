import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ColContainerProps {
  title: string;
  options: string[];
}
const ColContainer = ({ title, options }: ColContainerProps) => {
  const titleNormalized = title.replace(/\s+/g, "-").toLocaleLowerCase();
  return (
    <div className="w-56 p-4">
      <div className="flex items-center relative group w-fit">
        <ChevronRight className="size-4 absolute -left-3.5 top-[5px] group-hover:-left-[17px] group-hover:scale-125" />
        <h1 className="font-semibold underline cursor-pointer group-hover:scale-105">
          <Link
            to={`products/${titleNormalized}`}
            className="w-fit cursor-pointer"
          >
            {title}
          </Link>
        </h1>
      </div>
      {options.map((option) => (
        <div
          className="lg:text-sm text-xs my-4 transition hover:scale-105 ease-out"
          key={option}
        >
          <Link
            to={`products/${titleNormalized}/${option.replace(/\s+/g, "-")}`}
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
