import DropdownButton from "./DropdownButton";

interface PublicDropdownProps {
  nav: (arg: string) => void;
}

const PublicDropdown = ({ nav }: PublicDropdownProps) => {
  return (
    <>
      <DropdownButton onClick={() => nav("/login")} text="Login" />
      <DropdownButton onClick={() => nav("/register")} text="Register" />

    </>
  );
};

export default PublicDropdown;
