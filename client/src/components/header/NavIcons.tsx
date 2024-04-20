import { HeartIcon } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import TotalPrice from "./TotalPrice";
import ProfileDropdown from "./profileDropdown/ProfileDropdown";
import { useAuth } from "@/context/AuthProvider";

interface NavIconsProps {
  nav: (arg: string) => void;
}

const NavIcons = ({ nav }: NavIconsProps) => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center justify-center gap-x-3 h-full">
      <ProfileDropdown nav={nav} user={user} signOut={signOut} />
      <HeartIcon
        onClick={() => nav("/favorites")}
        className="h-6 w-6 hover:scale-[110%] cursor-pointer"
      />
      <ShoppingBasket
        onClick={() => nav("/cart")}
        className="h-6 w-6 hover:scale-[120%] cursor-pointer"
      />
      <div className="border-l h-full ml-2 mr-1 border-black hidden lg:inline-block" />
      <div className="hidden lg:inline-block" onClick={() => nav("/cart")}>
        <TotalPrice nav={nav}/>
      </div>
    </div>
  );
};

export default NavIcons;
