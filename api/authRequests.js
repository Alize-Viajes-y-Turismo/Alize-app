import axios from "./axios.js"


export const loginRequest = user => axios.post("api/users/login", user);

export const registerRequest = user => axios.post("api/users/register", user);

export const logoutRequest = () => axios.get("/users/logout");

export const verifyTokenRequest = token => axios.get("/verify", token);




