import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface AuthContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // isAdmin 
  const [isAdmin, setIsAdmin] = useState<boolean>(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, setIsAdmin, isAdmin }}>
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
