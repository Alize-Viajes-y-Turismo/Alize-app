import React, { createContext, useContext, useState } from 'react';
import { recoveryPasswordRequest, sendEmailVerificationCodeRequest } from '../api/usersRequests';

const RecoveryPasswordContext = createContext();

export const useRecoveryPasswordContext = () => {
  return useContext(RecoveryPasswordContext);
};

export const RecoveryPasswordProvider = ({ children }) => {
  const [emailRecoveryPassword, setEmailRecoveryPassword] = useState(undefined);

  const handleAuthError = (error) => {
    console.log(error.message);
  };

  const preRecoveryPassword = async (data) => {
    try {
      await sendEmailVerificationCodeRequest(data);
      setEmailRecoveryPassword(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const recoveryPassword = async (data) => {
    try {
      await recoveryPasswordRequest(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <RecoveryPasswordContext.Provider value={{ emailRecoveryPassword, preRecoveryPassword, recoveryPassword }}>
      {children}
    </RecoveryPasswordContext.Provider>
  );
};