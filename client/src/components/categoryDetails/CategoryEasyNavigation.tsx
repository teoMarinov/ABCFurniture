import { Link } from "react-router-dom";
import clsx from "clsx";
interface CategoryEasyNavigationProps {
  currentlyOpen?: string;
}
const CategoryEasyNavigation = ({
  currentlyOpen,
}: CategoryEasyNavigationProps) => {
  return (
    <div className="lg:flex flex-col hidden h-full border-2 border-gray-700 p-5 space-y-6 text-2xl rounded-md">
      <Link to="/products/kitchen">
        <p className={clsx(currentlyOpen === "kitchen" && "underline")}>
          Kitchen
        </p>
      </Link>
      <Link to="/products/bedroom">
        <p className={clsx(currentlyOpen === "bedroom" && "underline")}>
          Bedroom
        </p>
      </Link>
      <Link to="/products/living-and-dining-room">
        <p
          className={clsx(
            currentlyOpen === "living-and-dining-room" && "underline"
          )}
        >
          Living And Dining Room
        </p>
      </Link>
      <Link to="/products/lighting">
        <p className={clsx(currentlyOpen === "lighting" && "underline")}>
          Lighting
        </p>
      </Link>
      <Link to="/products/children-furniture">
        <p
          className={clsx(
            currentlyOpen === "children-furniture" && "underline"
          )}
        >
          Children Furniture
        </p>
      </Link>
      <Link to="/products/hallway">
        <p className={clsx(currentlyOpen === "hallway" && "underline")}>
          Hallway
        </p>
      </Link>
      <Link to="/products/outdoor-garden">
        <p className={clsx(currentlyOpen === "outdoor-garden" && "underline")}>
          Outdoor Garden
        </p>
      </Link>
    </div>
  );
};

export default CategoryEasyNavigation;
