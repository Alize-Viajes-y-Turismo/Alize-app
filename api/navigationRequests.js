import axiosApi from "../api/axios.js";



export const verifyTokenNavigationRequest = token => axiosApi.post("api/verify", token);