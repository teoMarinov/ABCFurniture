import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";
import NavbarRoutes from "./routes/NavbarRoutes";
import AddProduct from "./components/add-product/AddProduct";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "./components/home/HomePage";
import SubCategoriesList from "./components/categoryDetails/SubCategoriesList";
import ProductDisplay from "./components/products/ProductDisplay";
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
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={"ERROR 404"} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products/:category" element={<SubCategoriesList />} />
            <Route
              path="/products/:category/:subcategory"
              element={<ProductDisplay />}
            />

            {/* Authenticated routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/promotions" element={"PRO RPO"} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </div>
  );
}
