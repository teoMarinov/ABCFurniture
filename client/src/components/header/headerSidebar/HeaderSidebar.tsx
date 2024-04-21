import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SidebarAccordion from "./SidebarAccordion";
import { Link } from "react-router-dom";

const HeaderSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px]">
        <div className="flex-col flex mt-3 gap-y-5">
          <SidebarAccordion />
          <SheetClose asChild>
            <Link to={"/promotions"}>Promotions</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to={"/limited-time"}>Limited time</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSidebar;
