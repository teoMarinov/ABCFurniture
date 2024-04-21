import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";

const NavbarRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarRoutes;
