import React, { createContext, useContext } from 'react';
import { updatePasswordRequest, updateNameRequest } from '../api/usersRequests';

// Crear el contexto
const UpdateContext = createContext();

// Hook personalizado para utilizar el contexto
export const useUpdateContext = () => useContext(UpdateContext);

// Proveedor del contexto
export const UpdateProvider = ({ children }) => {

  // Función para actualizar la contraseña
  const updatePassword = async (data) => {
    try {
      const res = await updatePasswordRequest(data);
      return res.data.success;
    } catch (error) {
      console.error('Error updating password:', error);
      return false;
    }
  };

  // Función para actualizar el nombre
  const updateName = async (data) => {
    try {
      const res = await updateNameRequest(data);
      return res.data.success;
    } catch (error) {
      console.error('Error updating name:', error);
      return false;
    }
  };

  return (
    <UpdateContext.Provider
      value={{
        updatePassword,
        updateName,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};