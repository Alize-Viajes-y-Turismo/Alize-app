import axios from "./axios"

export async function loginRequest(user) {
    const res = await axios.post("/users/login", user);
    return res;
} 

export async function registerRequest(user) {
    const res = await axios.post("/users/register", user);
    return res;
} 

export async function verifyTokenRequest() {
    const res = await axios.get("/verify");
    return res;
} 