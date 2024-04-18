import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoutes from "./context/PrivateRoutes";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <AuthProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/products" element={"This is products"}/> */}
          <Route path="/products/:category" element={"This is category"}/>
          <Route path="/products/:category/:subcategory" element={"This is sub-category"}/>

          <Route element={<PrivateRoutes />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
