import Router from "./navigation/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import React from "react";

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
