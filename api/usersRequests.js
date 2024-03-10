import axiosApi from "../api/axios.js";



export const loginRequest = user => axiosApi.post("/users/login", user);

export const registerRequest = user => axiosApi.post("/users/register", user);

export const logoutRequest = () => axiosApi.get("/users/logout");

export const verifyTokenNavigationRequest = token => axiosApi.post("/verify", token);






