import { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [authData, setAuthData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const data = JSON.parse(authDataSerialized);
        setAuthData(data);
      }
    } catch (err) {
      alert(err.message)
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  function login(data) {
    setAuthData(data)
    AsyncStorage.setItem('@AuthData', JSON.stringify(data));
  };

  async function logout() {
    setAuthData(undefined)
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
};