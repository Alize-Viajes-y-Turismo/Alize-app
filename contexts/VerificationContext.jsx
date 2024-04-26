import React, { createContext, useContext } from 'react';
import { verifyCodeRequest, userVerifiedRequest, verifyUserRequest } from '../api/usersRequests';

const VerificationContext = createContext();

export const useVerificationContext = () => {
  return useContext(VerificationContext);
};

export const VerificationProvider = ({ children }) => {

  const handleAuthError = (error) => {
    console.log(error.message);
  };

  const verifyCode = async (data) => {
    try {
      const res = await verifyCodeRequest(data);
      return res.data.success;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const verifyUser = async (data) => {
    try {
      await verifyUserRequest(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <VerificationContext.Provider value={{ verifyCode, verifyUser }}>
      {children}
    </VerificationContext.Provider>
  );
};