import { Link } from "react-router-dom";
import clsx from "clsx";
interface CategoryEasyNavigationProps {
  currentlyOpen: string;
}
const CategoryEasyNavigation = ({
  currentlyOpen,
}: CategoryEasyNavigationProps) => {
  return (
    <div className="lg:block hidden h-full border-2 p-2 px-4 text-xl">
      <Link to="/products/kitchen">
        <p className={clsx(currentlyOpen === "kitchen" && "font-bold")}>Kitchen</p>
      </Link>
      <Link to="/products/bedroom">
        <p className={clsx(currentlyOpen === "bedroom" && "font-bold")}>Bedroom</p>
      </Link>
      <Link to="/products/living-and-dining-room">
        <p className={clsx(currentlyOpen === "living-and-dining-room" && "font-bold")}>Living And Dining Room</p>
      </Link>
      <Link to="/products/lighting">
        <p className={clsx(currentlyOpen === "lighting" && "font-bold")}>Lighting</p>
      </Link>
      <Link to="/products/children-furniture">
        <p className={clsx(currentlyOpen === "children-furniture" && "font-bold")}>Children Furniture</p>
      </Link>
      <Link to="/products/hallway">
        <p className={clsx(currentlyOpen === "hallway" && "font-bold")}>Hallway</p>
      </Link>
      <Link to="/products/outdoor-garden">
        <p className={clsx(currentlyOpen === "outdoor-garden" && "font-bold")}>Outdoor Garden</p>
      </Link>
    </div>
  );
};

export default CategoryEasyNavigation;
