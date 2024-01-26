import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useGetUserRole } from "../hooks/useAPI";

interface AuthContextType {
  isLogin: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // isAdmin
  const userRoleHook = useGetUserRole();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      userRoleHook.getUserRole();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, isAdmin: userRoleHook.isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth 必須在 AuthProvider 內使用");
  }
  return authContextValue;
};

export { AuthProvider, useAuth };
