import React, { createContext, useContext, useState } from 'react';
import { updatePasswordRequest, sendEmailVerificationCodeRequest, getProfileDataRequest, getTravelsRequest } from '../api/usersRequests'; // Importa la función para obtener los viajes desde las solicitudes API

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(undefined);
  const [travels, setTravels] = useState([]); // Agrega estado para almacenar los viajes del usuario

  const handleAuthError = (error) => {
    console.log(error.message);
  };

  const updatePassword = async (data) => {
    try {
      await updatePasswordRequest(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const sendEmailVerificationCode = async (data) => {
    try {
      const res = await sendEmailVerificationCodeRequest(data);
      return res.data.success;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const getProfileData = async () => {
    try {
      const res = await getProfileDataRequest();
      setProfileData(res.data.data);
      return res.data.success;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const getTravels = async () => {
    try {
      const res = await getTravelsRequest(); // Llama a la función para obtener los viajes del usuario
      setTravels(res.data.travels); // Almacena los viajes en el estado
      return res.data.success;
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <UserContext.Provider value={{ profileData, travels, updatePassword, sendEmailVerificationCode, getProfileData, getTravels }}>
      {children}
    </UserContext.Provider>
  );
};