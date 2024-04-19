import logo from "@/assets/logo.svg";

import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className=" h-[8vh] shadow-sm border-b border-gray-400 shadow-gray-200 p-4 flex justify-between items-center xl:px-32 px-5">
      <img src={logo} className="cursor-pointer" onClick={() => nav("/")} />
      <SearchBar />
      <NavIcons nav={nav} />
    </div>
  );
};

export default Header;
