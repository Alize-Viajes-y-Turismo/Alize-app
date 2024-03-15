import { createContext, useContext, useState, useEffect} from 'react';
import { loginRequest, logoutRequest, registerUserRequest, resetPasswordRequest, sendEmailCodeRequest, verifyCodeRequest, verifyDataRegisterRequest, verifyTokenNavigationRequest } from '../api/usersRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuthContext = () => {

  return useContext(AuthContext)

};

export const AuthProvider = ({ children }) => {


  const [authData, setAuthData] = useState(undefined);

  const [verifyCode, setVerifyCode] = useState(undefined);

  const [navigate, setNavigate] = useState(undefined);

  const [authLoginErrors, setAuthLoginErrors] = useState(undefined);

  const preRegisterUser = async (user) => {

    try {

      const res = await verifyDataRegisterRequest(user);
      const code = await sendEmailCodeRequest(res.data.data);

      setAuthData(res.data.data);
      setVerifyCode(code.data.code);
      
    } catch (error) {

        setAuthLoginErrors(error);
        alert(error.message);

    }

  };

  const registerUser = async (user, emailCode, verifyCode) => {

    try {

      if (emailCode === verifyCode) {

        const res = await registerUserRequest(user);
        await AsyncStorage.setItem('token', res.data.token);
        
        setAuthData(res.data.data);
        setNavigate(true);

      } else{

        console.log("Código inválido")

      }

    } catch (error) {

        setAuthLoginErrors(error);
        console.log(error.message);

    }

  };

  const login = async (user) => {
  
    try {

      const res = await loginRequest(user);
      await AsyncStorage.setItem('token', res.data.token); 

      setAuthData(res.data.data);
      setNavigate(true);
    
    } catch (error) {
      
        setAuthLoginErrors(error);
        console.log(error.message);

    }

  };

  const logout = async () => {

    try {

      await logoutRequest();
      await AsyncStorage.removeItem("token");
      
      setAuthData(undefined);
      setNavigate(false);

    } catch (error){

      alert(error.message);

    }

  };

    const checkLogin = async () => {
    
      const token = await AsyncStorage.getItem('token');

      if (!token) {

        setAuthData(undefined)
        setNavigate(false)

      } else {

        try {

          const res = await verifyTokenNavigationRequest({ token: token })

          if (!res.data.data) {

            setAuthData(undefined)
            setNavigate(false)

          } else {

            setAuthData(res.data.data)
            setNavigate(true)


          }

        } catch (error) {
          
          setAuthData(undefined)
          setNavigate(false)

          console.log(error.message)

        }
        
      }

  };

  useEffect( () => {

    checkLogin();
    console.log("checking Login")

  }, [navigate]);



  return (
    <AuthContext.Provider value={{ authLoginErrors, authData, navigate, verifyCode, login, logout, registerUser, checkLogin, preRegisterUser}}>
      {children}
    </AuthContext.Provider>
  );
};


