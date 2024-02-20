import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false);

  const login = async () => {
    setAuth(true)
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
  }

  const logout = async () => {
    setAuth(false)
    await AsyncStorage.removeItem('@AuthData');
  }


  return (
    <AuthContext.Provider value={{auth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};