import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest, logoutRequest, verifyTokenNavigationRequest } from '../api/usersRequests';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(undefined);
  const [navigateVerify, setNavigateVerify] = useState(undefined);

  const handleAuthError = (error) => {
    console.log(error.message);
    // Aquí podrías agregar lógica adicional para manejar el error de manera específica
  };

  const login = async (data) => {
    try {
      const res = await loginRequest(data);
      
      if (res.data.success && res.data.verified ){
        await AsyncStorage.setItem('token', res.data.token);
        setNavigateVerify(res.data.success);
      } else if (res.data.success && !res.data.verified) {
        setLoginData(res.data.data);
        return { success: res.data.success, verified: res.data.verified };
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      await AsyncStorage.removeItem("token");
      setLoginData(undefined);
      setNavigateVerify(false);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        setNavigateVerify(false);
      } else {
        const res = await verifyTokenNavigationRequest({ token });
        if (!res.data.data) {
          setNavigateVerify(false);
        } else {
          setNavigateVerify(true);
          setLoginData(res.data.data);
        }
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, navigateVerify, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};