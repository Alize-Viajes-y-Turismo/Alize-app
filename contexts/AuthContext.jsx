import { createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, logoutRequest } from '../api/authRequests';
import encryptAndStoreToken from '../libs/encryptAndStoreToken';
import decryptToken from '../libs/decryptToken';

const AuthContext = createContext();

export const useAuthContext = () => {

  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("Error de contexto");
  }
  return context;

};

export const AuthProvider = async ({ children }) => {

  //CONSTANTES

  const [authData, setAuthData] = useState(undefined);
  const [authLoginErrors, setAuthLoginErrors] = useState(undefined);

  const token = await decryptToken();



//-------------------------------------------




  const register = async (user) => {
    try{

      const res = await registerRequest(user);
      setAuthData(res.data);
      encryptAndStoreToken(res.token);

  } catch (error) {

      setAuthLoginErrors(error);
      console.log(error.response.data);
  }

  };

  const login = async (user) => {
  
  try {

    const res = await loginRequest(user);
    setAuthData(res.data);
    encryptAndStoreToken(res.token);

  } catch (error) {
    
      setAuthLoginErrors(error);
      console.log(error.response.data);

  }

  };



  const logout = async () => {

    try {

      await logoutRequest();
      setAuthData(undefined);

    } catch (error){

      console.log(error);

    }



    const checkLogin = async (token) => {
      
      if (!token) {
          setAuthData(undefined)
          return;
      }

      try {

          const res = await verifyTokenRequest(token)

          if (!res.data) {

              setAuthData(undefined)
              return;

          }

          setAuthData(res.data)

      } catch (error) {
        
        setAuthData(undefined)

      }
      

  }



//------------------------------------



    useEffect( async () => {

      checkLogin(token);
  }, [])

  }; 



//-------------------------------------------



  return (
    <AuthContext.Provider value={{ authLoginErrors, authData, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
