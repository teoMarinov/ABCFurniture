import DropdownButton from "./DropdownButton";

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
      <DropdownButton onClick={() => nav("/profile")} text="Profile" />
      <DropdownButton onClick={signOut} text="Log out" />
    </>
  );
};

export default AuthenticatedDropdown;
