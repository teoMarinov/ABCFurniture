import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarItemButton from "./NavbarItemButton";

const Navbar = () => {
  return (
    <div className="h-10 px-32 py-1">
      <NavigationMenu>
        <NavigationMenuList className="gap-x-20">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-60 justify-start">Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="size-44 bg-red-600"></div>
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
