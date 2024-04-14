import { Button } from "@/components/ui/button";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

export default function Home() {
  const [formInfo, setFormInfo] = useState({ username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:8080/auth/register", formInfo);
  };

  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
