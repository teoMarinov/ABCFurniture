import logo from "@/assets/logo.svg";

import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-screen h-[8vh] shadow-sm border-b border-gray-400 shadow-gray-200 p-4 flex justify-between items-center px-32">
      <img src={logo} />
      <SearchBar />
      <NavIcons />
    </div>
  );
};

export default Header;
