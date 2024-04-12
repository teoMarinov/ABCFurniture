import { Button } from "@/components/ui/button";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
export default function Home() {
  const [formInfo, setFormInfo] = useState({ username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:8080/auth/register", formInfo)
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="username">Username:</Label>
          <Input
            type="login"
            id="username"
            name="username"
            value={formInfo.username}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">password:</Label>
          <Input
            type="login"
            id="password"
            name="password"
            value={formInfo.password}
            onChange={handleChange}
          />
        </div>
        <Button variant={"secondary"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
