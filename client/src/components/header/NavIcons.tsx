import { PersonIcon } from "@radix-ui/react-icons";
import { HeartIcon } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import CurrentPrice from "./CurrentPrice";

const NavIcons = () => {
    return (
        <div className="flex items-center justify-center gap-x-3">
                <PersonIcon className="h-6 w-6" />
                <HeartIcon className="h-6 w-6" />
                <ShoppingBasket className="h-6 w-6" />
                <div className="border-l h-full ml-2 mr-1 border-black"/>
                <CurrentPrice />
        </div>
    );
};

export default NavIcons;