import { Link } from "react-router-dom";
import clsx from "clsx";
interface CategoryEasyNavigationProps {
  currentlyOpen?: string;
}
const CategoryEasyNavigation = ({
  currentlyOpen,
}: CategoryEasyNavigationProps) => {
  return (
    <div className="lg:flex flex-col hidden h-full border-2 border-gray-700 w-80 items-center text-2xl rounded-md">
      <div className="w-full bg-neutral-700 py-4">
        <h1 className="text-white w-full text-center text-3xl">Categories</h1>
      </div>
      <div className="flex flex-col space-y-6 py-5">
        <Link className="hover:-translate-y-0.5" to="/kitchen">
          <p className={clsx(currentlyOpen === "kitchen" && "underline")}>
            Kitchen
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/bedroom">
          <p className={clsx(currentlyOpen === "bedroom" && "underline")}>
            Bedroom
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/living-and-dining-room">
          <p
            className={clsx(
              currentlyOpen === "living-and-dining-room" && "underline"
            )}
          >
            Living And Dining Room
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/lighting">
          <p className={clsx(currentlyOpen === "lighting" && "underline")}>
            Lighting
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/children-furniture">
          <p
            className={clsx(
              currentlyOpen === "children-furniture" && "underline"
            )}
          >
            Children Furniture
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/hallway">
          <p className={clsx(currentlyOpen === "hallway" && "underline")}>
            Hallway
          </p>
        </Link>
        <Link className="hover:-translate-y-0.5" to="/outdoor-garden">
          <p
            className={clsx(currentlyOpen === "outdoor-garden" && "underline")}
          >
            Outdoor Garden
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryEasyNavigation;
