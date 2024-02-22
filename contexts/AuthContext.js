import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/authRequests";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function register(user) {
    try {
      const res = registerRequest(user);
      switch(res.status) {
        case 200: 
          setUser(res.data);
          setIsAuthenticated(true)
      }      
    }
    catch {
      setUser(null);
      setIsAuthenticated(false)
    }
  };

  async function login(data) {
    try {
      await loginRequest(data);
      setUser(data);
      setIsAuthenticated(true)
    } catch {
      setUser(null);
      setIsAuthenticated(false)
    }
  };

  async function checkLogin() {

    const cookies = Cookies.get()

    if (!cookies.token) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }
    try {
      const res = await verifyTokenRequest(cookies.token)

      if (!res.data) {
        setIsAuthenticated(false);
        return;
      }
      setIsAuthenticated(true);
      setUser(res.data);

    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    }


    useEffect(() => {
      // Aquí puedes realizar alguna lógica para verificar la autenticación inicial basada en el token almacenado en el localStorage o sessionStorage.
    }, []);

    return (
      <AuthContext.Provider value={{ user, token, login, register, checkLogin, isAuthenticated, useAuthprovider }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export function useAuthContext() {
  return useContext(AuthContext);
};