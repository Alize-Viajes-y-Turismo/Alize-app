import { createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, logoutRequest } from '../api/authRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';




const AuthContext = createContext();

export const useAuthContext = () => {

  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("Error de contexto");
  }
  return context;

};

export const AuthProvider = ({ children }) => {

  //CONSTANTES

  const [authData, setAuthData] = useState(undefined);
  const [authLoginErrors, setAuthLoginErrors] = useState(undefined);



//-------------------------------------------




  const register = async (user) => {

    try{

      const res = await registerRequest(user);
      setAuthData(res.data.data);
      AsyncStorage.setItem('token', res.data.token);

  } catch (error) {

      setAuthLoginErrors(error);
      console.log(error.response.data);
  }

  };

  const login = async (user) => {
  
  try {

    const res = await loginRequest(user);
    setAuthData(res.data.data);
    AsyncStorage.setItem('token', res.data.token);
  
  } catch (error) {
    
      setAuthLoginErrors(error);
      console.log(error)

  }

  };



  const logout = async () => {

    try {

      await logoutRequest();
      setAuthData(undefined);

    } catch (error){

      console.log(error);

    }

  };

    const checkLogin = async () => {
    
      const token = await AsyncStorage.getItem('token');

      if (!token) {
          setAuthData(undefined)
          return;
      }

      try {

          const res = await verifyTokenRequest(token)

          if (!res.data.data) {

              setAuthData(undefined)
              return;

          }

          setAuthData(res.data.data)

      } catch (error) {
        
        setAuthData(undefined)

      }
      

  };



//------------------------------------



    useEffect( () => {

      checkLogin();

  }, [])



//-------------------------------------------



return (
  <AuthContext.Provider value={{ authLoginErrors, authData, login, logout, register}}>
    {children}
  </AuthContext.Provider>
);
};
