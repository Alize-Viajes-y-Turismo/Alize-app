import axiosApi from "../api/axios.js";



export const loginRequest = user => axiosApi.post("api/users/login", user);

export const registerRequest = user => axiosApi.post("api/users/register", user);

export const logoutRequest = () => axiosApi.get("api/users/logout");






