import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarItemButton from "./NavbarItemButton";
import CategoriesMenu from "./CategoriesMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 px-32 py-1">
      <NavigationMenu>
        <NavigationMenuList className="gap-x-20">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-60 justify-start">
              <Link to="products">Products</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <CategoriesMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavbarItemButton title="Promotions" navTo="/promotions" />
          <NavbarItemButton title="Limited time" navTo="/limited-time" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
