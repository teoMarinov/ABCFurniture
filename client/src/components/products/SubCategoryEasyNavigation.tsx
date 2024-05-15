import clsx from "clsx";
import { Link } from "react-router-dom";

interface SubCategoryEasyNavigationProps {
  category: string;
  options: { subcategoryName: string }[];
  currentlyOpen?: string;
}
const SubCategoryEasyNavigation = ({
  category,
  options = [],
  currentlyOpen,
}: SubCategoryEasyNavigationProps) => {
  return (
    <div className="xl:flex flex-col hidden h-full border-xs capitalize border-gray-400 items-center text-xl">
      <div className="w-full bg-black py-4">
        <h1 className="text-white w-full text-center text-2xl hover:scale-105">
          <Link to={`/${category}`}>{category?.replace(/-/g, " ")}</Link>
        </h1>
      </div>
      <div className="flex flex-col w-80">
        {options.map((option) => (
          <div
            key={option.subcategoryName}
            className="border-b border-x border-black border-x-gray-400 w-full flex justify-center"
          >
            <div className="py-4 w-[267px]">
              <Link to={`/${category}/${option.subcategoryName}`}>
                <p
                  className={clsx(
                    "hover:text-emerald-500",
                    currentlyOpen === option.subcategoryName &&
                      "text-emerald-500 font-black"
                  )}
                >
                  {option.subcategoryName?.replace(/-/g, " ")}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryEasyNavigation;
