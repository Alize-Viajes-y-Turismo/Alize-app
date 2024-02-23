import axios from "axios"

export async function loginRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post("https://hfjhbt27-3001.brs.devtunnels.ms/api/users/login", body);
    return res;
} 

export async function registerRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post("https://hfjhbt27-3001.brs.devtunnels.ms/api/users/register", body);
    return res;
} 

export async function verifyTokenRequest() {
    const res = await axios.get("https://hfjhbt27-3001.brs.devtunnels.ms/");
    return res;
} 

