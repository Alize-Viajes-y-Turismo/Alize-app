import axios from "./axios.js"


export const loginRequest = user => axios.post("/users/login", user);

export const registerRequest = user => axios.post("/users/register", user);

export const logoutRequest = () => axios.get("/users/logout");

export const verifyTokenRequest = token => axios.post("/verify", token);




