import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";
import NavbarRoutes from "./routes/NavbarRoutes";
import AddProduct from "./components/add-product/AddProduct";

export default function Home() {
  return (
    <div className="h-full w-full overflow-auto">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Routes including navbar */}
          <Route element={<NavbarRoutes />}>
            <Route path="/" element={"Home"} />
            <Route path="/*" element={"ERROR 404"} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products/:category" element={"This is category"} />
            <Route
              path="/products/:category/:subcategory"
              element={"This is sub-category"}
            />

            {/* Authenticated routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/promotions" element={"PRO RPO"} />
            </Route>

          </Route>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}
