import { Link } from "react-router-dom";
import clsx from "clsx";
interface CategoryEasyNavigationProps {
  currentlyOpen?: string;
}
const CategoryEasyNavigation = ({
  currentlyOpen,
}: CategoryEasyNavigationProps) => {
  return (
    <div className="xl:flex flex-col hidden h-full border-xs capitalize border-gray-400 items-center text-xl">
      <div className="w-full bg-black py-4">
        <h1 className="text-white w-full text-center text-2xl">Categories</h1>
      </div>
      <div className="flex flex-col w-80">
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/kitchen">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "kitchen" && "text-emerald-500 font-black"
                )}
              >
                Kitchen
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/bedroom">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "bedroom" && "text-emerald-500 font-black"
                )}
              >
                Bedroom
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link
              className="hover:-translate-y-0.5"
              to="/living-and-dining-room"
            >
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "living-and-dining-room" &&
                    "text-emerald-500 font-black"
                )}
              >
                Living And Dining Room
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/lighting">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "lighting" && "text-emerald-500 font-black"
                )}
              >
                Lighting
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/children-furniture">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "children-furniture" &&
                    "text-emerald-500 font-black"
                )}
              >
                Children Furniture
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/hallway">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "hallway" && "text-emerald-500 font-black"
                )}
              >
                Hallway
              </p>
            </Link>
          </div>
        </div>
        <div className="border-b border-x border-black border-x-gray-400 w-full flex justify-center">
          <div className="py-4 w-[267px]">
            <Link className="hover:-translate-y-0.5" to="/outdoor-garden">
              <p
                className={clsx(
                  "hover:text-emerald-500",
                  currentlyOpen === "outdoor-garden" &&
                    "text-emerald-500 font-black"
                )}
              >
                Outdoor Garden
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryEasyNavigation;
