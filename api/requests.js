import backendApi from "./backendApi.js"


export const loginRequest = user => backendApi.post("api/users/login", user);

export const registerRequest = user => backendApi.post("api/users/register", user);

export const logoutRequest = () => backendApi.get("api/users/logout");

export const verifyTokenRequest = token => backendApi.post("api/verify", token);

export const sentRecoveryMail = email => backendApi.post("api/recoveryMail", email)





