import React from "react";

import { AuthProvider } from './contexts/AuthContext';
import { RecoveryPasswordProvider } from './contexts/RecoveryPasswordContext';
import { VerificationProvider } from './contexts/VerificationContext';
import { UserProvider } from './contexts/UserContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { LoadingProvider } from "./contexts/LoadingContext";
import { UpdateProvider } from "./contexts/UpdateContext";
import { PassengerProvider } from "./contexts/PassengerContext";
import Router from "./navigation/Router";

function App() {

  return (

    <React.StrictMode>
      <PassengerProvider>
      <AuthProvider>
        <RecoveryPasswordProvider>
          <VerificationProvider>
            <UserProvider>
              <RegisterProvider>
                <LoadingProvider>
                  <UpdateProvider>
                    <Router/>
                  </UpdateProvider>
                </LoadingProvider>
              </RegisterProvider>
            </UserProvider>
          </VerificationProvider>
        </RecoveryPasswordProvider>
      </AuthProvider>
      </PassengerProvider>
    </React.StrictMode>
    
  )

}

export default App;