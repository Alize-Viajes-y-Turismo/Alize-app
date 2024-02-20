import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);


  const login = (token, user) => {
    setToken(token);
    setUser(user);
    setAuth(true)
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setAuth(false)
  };

  useEffect(() => {
    // Aquí puedes realizar alguna lógica para verificar la autenticación inicial basada en el token almacenado en el localStorage o sessionStorage.
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};