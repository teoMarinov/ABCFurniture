import { userDataType } from "@/types";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{
  user: userDataType | null;
  singIn: (user: userDataType, jwt: string) => void;
  singOut: () => void;
  token: string;
}>({
  user: null,
  singIn: () => {},
  singOut: () => {},
  token: "",
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | userDataType>(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const singIn = (user: userDataType, jwt: string) => {
    setUser(user);
    setToken(jwt);
    localStorage.setItem("token", jwt);
    navigate("/");
  };

  const singOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
