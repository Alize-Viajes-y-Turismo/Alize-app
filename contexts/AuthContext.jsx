import { createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, logoutRequest} from '../api/usersRequests';
import { verifyTokenNavigationRequest } from '../api/navigationRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuthContext = () => {

  return useContext(AuthContext)

};

export const AuthProvider = ({ children }) => {


  const [authData, setAuthData] = useState(undefined);

  const [authLoginErrors, setAuthLoginErrors] = useState(undefined);

  const register = async (user) => {

    try {

      const res = await registerRequest(user);
      setAuthData(res.data.data);
      await AsyncStorage.setItem('token', res.data.token);

    } catch (error) {

        setAuthLoginErrors(error);
        alert(error.message);

    }

  };

  const login = async (user) => {
  
    try {

      const res = await loginRequest(user);
    
      setAuthData(res.data.data);
      await AsyncStorage.setItem('token', res.data.token); 
    
    } catch (error) {
      
        setAuthLoginErrors(error);
        alert(error.message)

    }

  };

  const logout = async () => {

    try {

      await logoutRequest();
      await AsyncStorage.removeItem("token");
      
      setAuthData(undefined);

    } catch (error){

      alert(error.message);

    }

  };

    const checkLogin = async () => {
    
      const token = await AsyncStorage.getItem('token');

      if (!token) {
          setAuthData(undefined)
      } else {

        try {

          const res = await verifyTokenNavigationRequest({ token: token })

          console.log(res.data.data)

          if (!res.data.data) {
              setAuthData(undefined)
          } else {
            setAuthData(res.data.data)
          }

        } catch (error) {
          
          setAuthData(undefined)
          console.log(error.message)

        }
        
      }

  };

  useEffect( () => {

    checkLogin();
    console.log("checking Login")

  }, []) 



  return (
    <AuthContext.Provider value={{ authLoginErrors, authData, login, logout, register, checkLogin}}>
      {children}
    </AuthContext.Provider>
  );
};


