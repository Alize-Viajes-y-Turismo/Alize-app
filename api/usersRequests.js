import axiosApi from "../api/axios.js";

export const loginRequest = user => axiosApi.post("/users/login", user);

export const registerUserRequest = user => axiosApi.post("/users/register", user);

export const sendEmailVerificationCodeRequest = user => axiosApi.post("/users/sendemailverificationcode", user);

export const verifyCodeRequest = code => axiosApi.post("/users/verifycode", code);

export const logoutRequest = () => axiosApi.get("/users/logout");

export const verifyTokenNavigationRequest = token => axiosApi.post("/users/verifytoken", token);

export const recoveryPasswordRequest = (email, password) => axiosApi.put("/users/recoverypassword", email, password);

export const updatePasswordRequest = (password, newPassword) => axiosApi.put("/users/updatepassword", password, newPassword);

export const updateNameRequest = (password, newName) => axiosApi.put("/users/updatename", password, newName);

export const verifyUserRequest = (data) => axiosApi.post("/users/verifyuser", data);

export const getProfileDataRequest = () => axiosApi.get("/users/getprofiledata");

