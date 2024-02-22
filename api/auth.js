import axios from "./axios"


//Auth users
export const loginRequest = user => axios.post("/users/login", user);

export const registerRequest = user => axios.post("/users/register", user);

export const verifyTokenRequest = () => axios.get("/verify");