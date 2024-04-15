import { Button } from "@/components/ui/button";
import DropDownButton from "./DropdownButton";

interface PublicDropdownProps {
  nav: (arg: string) => void;
}

const PublicDropdown = ({ nav }: PublicDropdownProps) => {
  return (
    <>
      <DropDownButton onClick={() => nav("/login")} text="Login" />
      <DropDownButton onClick={() => nav("/register")} text="Register" />

    </>
  );
};

export default PublicDropdown;
