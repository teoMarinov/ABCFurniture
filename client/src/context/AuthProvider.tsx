import { persistentLogin, setJwtToken } from "@/utils/axios-helper";
import { userDataType } from "@/common/types";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{
  user: userDataType | null;
  signIn: (user: userDataType, jwt: string) => void;
  signOut: () => void;
}>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | userDataType>(null);
  const navigate = useNavigate();

  const signIn = (user: userDataType, jwt: string) => {
    setUser(user);
    setJwtToken(jwt);
  };

  const signOut = () => {
    setUser(null);
    setJwtToken("");
    navigate("/login");
  };

  useEffect(() => {
    try {
      persistentLogin()
        .then(({ data }) => signIn(data.user, data.jwt))
        // .finally(() => navigate("/"));
    } catch (error) {
      // console.log(error.message);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
