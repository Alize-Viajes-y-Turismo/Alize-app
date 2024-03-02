import backendApi from "./backendApi.js"


export const loginRequest = user => backendApi.post("/users/login", user);

export const registerRequest = user => backendApi.post("/users/register", user);

export const logoutRequest = () => backendApi.get("/users/logout");

export const verifyTokenRequest = token => backendApi.post("/verify", token);




