import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarItemButton from "./NavbarItemButton";
import CategoriesMenu from "./CategoriesMenu";



const Navbar = ( ) => {
  return (
    <div>
    <div className="h-10 lg:px-32 px-5 py-1">
      <NavigationMenu>
        <NavigationMenuList className="gap-x-20">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="justify-start">
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
    {/* {children} */}
    </div>
  );
};

export default Navbar;
