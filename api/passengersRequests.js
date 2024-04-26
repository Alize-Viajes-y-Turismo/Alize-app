import axiosApi from "../api/axios.js";

export const getUserPassengersRequest = () => axiosApi.get('/users/passengers');

export const deletePassengerRequest = () => axiosApi.delete('/passengers/deletepassenger');

export const registerPassengerRequest = (passengerData) => axiosApi.post('/passengers/register', passengerData);
