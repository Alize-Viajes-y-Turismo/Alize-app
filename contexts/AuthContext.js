import { createContext, useContext, useState} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/authRequests";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    
  };

  async function logout() {
    
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, checkLogin, isAuthenticated, useAuthprovider }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
};