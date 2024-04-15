import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoutes from "./context/PrivateRoutes";

export default function Home() {
  return (
    <div className="h-screen">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
