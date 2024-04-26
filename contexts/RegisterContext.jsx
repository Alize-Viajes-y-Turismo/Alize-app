import React, { createContext, useContext, useState } from 'react';
import { registerUserRequest } from '../api/usersRequests';

const RegisterContext = createContext();

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};

export const RegisterProvider = ({ children }) => {
  const [registrationErrors, setRegistrationErrors] = useState(null); 
  const [registerData, setRegisterData] = useState(undefined);

  const handleRegistrationError = (error) => {
    console.log(error.message);
    setRegistrationErrors(error); 
  };

  const registerUser = async (data) => {
    try {
      const res = await registerUserRequest(data);
      setRegisterData(res.data.data);
      return res.data.success; 
    } catch (error) {
      handleRegistrationError(error.response.data);
    }
  };

  return (
    <RegisterContext.Provider value={{ registrationErrors, registerData, registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};