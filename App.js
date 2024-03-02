import Router from "./navigation/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {

  return (
    
      
    
    <React.StrictMode>
      <AuthProvider>
        <LoadingProvider>
            <Router/>
        </LoadingProvider>
      </AuthProvider>
    </React.StrictMode>
  )

}

export default App
