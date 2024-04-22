import logo from "@/assets/logo.svg";

import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import HeaderSidebar from "./headerSidebar/HeaderSidebar";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className="w-screen h-[8vh] shadow-sm border-b border-gray-400 shadow-gray-200 p-4 flex justify-between items-center xl:px-32 px-5">
      <div className="block sm:hidden w-24">
        <HeaderSidebar />
      </div>
      <img
        src={logo}
        className="cursor-pointer lg:size-44 size-32"
        onClick={() => nav("/")}
      />
      <div className=" sm:block hidden w-1/2">
        <SearchBar />
      </div>
      <NavIcons nav={nav} />
    </div>
  );
};

export default Header;
