import { createContext, useContext, useState, useEffect } from 'react';
import apiLogin from '../api/apiLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(undefined)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const data = JSON.parse(authDataSerialized);
        setAuthData(data);
      }
      setLoading(false);
  }

  async function login(email, password) {
    const res = apiLogin(email, password)
    if (res.status === 200) {
      const data = res.data
      setAuthData(data);
      AsyncStorage.setItem('@AuthData', JSON.stringify(data));
    }
  };

  async function logout() {
    setAuthData(undefined)
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{authData, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}