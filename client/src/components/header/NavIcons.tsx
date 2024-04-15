import { PersonIcon } from "@radix-ui/react-icons";
import { HeartIcon } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import CurrentPrice from "./CurrentPrice";
import { useNavigate } from "react-router-dom";

const NavIcons = () => {
  const nav = useNavigate();

  return (
    <div className="flex items-center justify-center gap-x-3 h-full">
      <PersonIcon
        onClick={() => nav("/login")}
        className="h-6 w-6 cursor-pointer hover:scale-[110%]"
      />
      <HeartIcon
        onClick={() => nav("/favorites")}
        className="h-6 w-6 hover:scale-[110%] cursor-pointer"
      />
      <ShoppingBasket
        onClick={() => nav("/cart")}
        className="h-6 w-6 hover:scale-[120%] cursor-pointer"
      />
      <div className="border-l h-full ml-2 mr-1 border-black" />
      <div onClick={() => nav("/cart")}>
        <CurrentPrice />
      </div>
    </div>
  );
};

export default NavIcons;
