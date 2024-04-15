import { Button } from "@/components/ui/button";

interface PublicDropdownProps {
  nav: (arg: string) => void;
}

const PublicDropdown = ({ nav }: PublicDropdownProps) => {
  return (
    <>
      <Button
        onClick={() => nav("/login")}
        variant={"ghost"}
        className="w-full inline"
      >
        Login
      </Button>
      <Button
        onClick={() => nav("/register")}
        variant={"ghost"}
        className="w-full inline"
      >
        Register
      </Button>
    </>
  );
};

export default PublicDropdown;
