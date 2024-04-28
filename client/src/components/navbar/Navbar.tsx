import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarItemButton from "./NavbarItemButton";
import CategoriesMenu from "./CategoriesMenu";
import SearchBar from "../header/SearchBar";

const Navbar = () => {
  return (
    <div>
      <div className="h-[40px] xl:px-32 px-5 py-1 sm:flex hidden">
        <NavigationMenu className="">
          <NavigationMenuList className="lg:gap-x-20 gap-x-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="lg:w-60 w-32">
                Products
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
      <div className="block sm:hidden px-4 pt-2">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
