import axiosApi from "../api/axios.js";



export const loginRequest = user => axiosApi.post("/users/login", user);

export const registerUserRequest = user => axiosApi.post("/users/register", user);

export const verifyDataRegisterRequest = user => axiosApi.post("/users/verifydataregister", user);

export const sendEmailCodeRequest = user => axiosApi.post("/users/sendemailcode", user);

export const verifyCodeRequest = code => axiosApi.post("/users/verifycode", code);

export const logoutRequest = () => axiosApi.get("/users/logout");

export const verifyTokenNavigationRequest = token => axiosApi.post("/users/verifytoken", token);

export const resetPasswordRequest = (email, password) => axiosApi.put("/users/resetpassword", email,password);





