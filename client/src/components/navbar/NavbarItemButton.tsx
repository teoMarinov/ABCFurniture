import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface NavbarItemButtonProps {
  title: string;
  navTo: string;
}
const NavbarItemButton = ({ title, navTo }: NavbarItemButtonProps) => {
  return (
    <NavigationMenuItem>
      <Button variant={"ghost"} className="lg:w-60 w-32" asChild>
        <Link to={navTo}>{title}</Link>
      </Button>
    </NavigationMenuItem>
  );
};

export default NavbarItemButton;
