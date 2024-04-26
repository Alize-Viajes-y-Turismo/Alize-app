import React, { createContext, useContext, useState } from 'react';
import { getUserPassengersRequest, deletePassengerRequest, registerPassengerRequest } from '../api/passengersRequests';

const PassengerContext = createContext();

export const usePassengerContext = () => {
  return useContext(PassengerContext);
};

export const PassengerProvider = ({ children }) => {
  const [userPassengers, setUserPassengers] = useState([]);

  const getUserPassengers = async () => {
    try {
      // Realiza la solicitud a la API para obtener los pasajeros
      const response = await getUserPassengersRequest(); // Cambiado el nombre de la función
      // Actualiza el estado de los pasajeros con los datos obtenidos
      setUserPassengers(response.data.passengers);
      return response.data.success;
    } catch (error) {
      console.error('Error fetching passengers:', error);
    }
  };

  const addPassenger = async (passengerData) => {
    try {
      await registerPassengerRequest(passengerData); // Cambiado el nombre de la función
      // Después de agregar un pasajero, vuelve a obtener la lista de pasajeros actualizada
      getUserPassengers();
    } catch (error) {
      console.error('Error adding passenger:', error);
    }
  };

  const removePassenger = async (passengerId, travelId) => {
    try {
      // Hacer una solicitud al backend para eliminar el pasajero
      await deletePassengerRequest(passengerId, travelId); // Cambiado el nombre de la función
      // Después de eliminar un pasajero, vuelve a obtener la lista de pasajeros actualizada
      getUserPassengers();
    } catch (error) {
      console.error('Error removing passenger:', error);
      throw new Error('Error removing passenger');
    }
  };

  return (
    <PassengerContext.Provider value={{ userPassengers, addPassenger, removePassenger, getUserPassengers }}>
      {children}
    </PassengerContext.Provider>
  );
};