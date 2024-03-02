import axios from "axios"
import {EXPO_PUBLIC_LOGIN_ENDPOINT, EXPO_PUBLIC_REGISTER_ENDPOINT} from "@env"

export async function loginRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post(EXPO_PUBLIC_LOGIN_ENDPOINT, body);
    return res;
} 

export async function registerRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post("https://7z6zp67w-3001.brs.devtunnels.ms/api/users/register", body);
    return res;
} 

export async function verifyTokenRequest() {
    const res = await axios.get("https://hfjhbt27-3001.brs.devtunnels.ms/");
    return res;
} 

