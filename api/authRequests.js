import axios from "axios"

export async function loginRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post("/users/login", body);
    return res;
} 

export async function registerRequest(email, password) {
    const body = {
        email: email,
        password: password
    }
    const res = await axios.post("/users/register", body);
    return res;
} 

export async function verifyTokenRequest() {
    const res = await axios.get("/verify");
    return res;
} 

