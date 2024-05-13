import clsx from "clsx";
import { Link } from "react-router-dom";

interface SubCategoryEasyNavigationProps {
  category: string;
  options: string[];
  currentlyOpen?: string;
}
const SubCategoryEasyNavigation = ({
  category,
  options = [],
  currentlyOpen,
}: SubCategoryEasyNavigationProps) => {
  return (
    <div className="lg:flex flex-col hidden h-full border-2 border-gray-700 w-80 items-center text-2xl rounded-md">
      <div className="w-full bg-neutral-700 py-4">
        <h1 className="text-white w-full text-center text-3xl capitalize">
          {category}
        </h1>
      </div>
      <div className="flex flex-col space-y-6 py-5">
        {options.map((option) => (
          <Link
            to={`/${category}/${option.subcategoryName}`}
            key={option.subcategoryName}
          >
            <p
              className={clsx(
                currentlyOpen === option.subcategoryName && "underline"
              )}
            >
              {option.subcategoryName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryEasyNavigation;
