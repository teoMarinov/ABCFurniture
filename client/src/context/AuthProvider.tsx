import { userDataType } from "@/types";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{
  user: userDataType | null;
  signIn: (user: userDataType, jwt: string) => void;
  signOut: () => void;
  token: string;
}>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  token: "",
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | userDataType>(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const signIn = (user: userDataType, jwt: string) => {
    setUser(user);
    setToken(jwt);
    localStorage.setItem("token", jwt);
    navigate("/");
  };

  const signOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
