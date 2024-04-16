import { userDataType } from "@/types";
import axios from "axios";
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
    document.cookie = `token=${jwt}; expires=${new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toUTCString()}; path=/`;
    navigate("/");
  };

  const signOut = () => {
    setUser(null);
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  useEffect(() => {
    try {
      const tokenCookie = document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="));
      let token = null;
      if (tokenCookie) {
        token = tokenCookie.split("=")[1];
      }

      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        axios
          .get("http://localhost:8080/auth/jwtLogin", config)
          .then((res) => setUser(res.data.user))
          .catch(
            () =>
              (document.cookie =
                "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
          )
          .finally(() => navigate("/"));
      } else {
        console.log("NO TOKEN");
      }
    } catch (error) {
      console.error("Error:", error);
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
