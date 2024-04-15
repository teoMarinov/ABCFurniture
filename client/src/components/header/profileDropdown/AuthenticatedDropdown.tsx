import { Button } from "@/components/ui/button";
import DropDownButton from "./DropdownButton";

interface AuthenticatedDropdownProps {
  nav: (arg: string) => void;
  signOut: () => void;
}
const AuthenticatedDropdown = ({
  nav,
  signOut,
}: AuthenticatedDropdownProps) => {
  return (
    <>
      <DropDownButton onClick={() => nav("/profile")} text="Profile" />
      <DropDownButton onClick={signOut} text="Log out" />
    </>
  );
};

export default AuthenticatedDropdown;
