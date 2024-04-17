import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface NavbarItemButtonProps {
  title: string;
  navTo: string;
}
const NavbarItemButton = ({ title, navTo }: NavbarItemButtonProps) => {
  return (
    <Button variant={"ghost"}>
      <Link to={navTo}>{title}</Link>
    </Button>
  );
};

export default NavbarItemButton;
