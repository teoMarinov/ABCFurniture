import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="h-screen">
    <Header />
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}
