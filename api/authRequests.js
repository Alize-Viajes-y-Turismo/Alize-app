import axios from "axios"

export async function loginRequest(user) {

    const res = await axios.post("http://localhost:3001/api/users/login", user);
    return res;

} 

export async function registerRequest(user) {

    const res = await axios.post("http://localhost:3001/api/users/register", user);
    return res;

} 

export async function logoutRequest() {

    const res = await axios.get("http://localhost:3001/api/users/logout");
    return res;

} 

export async function verifyTokenRequest(token) {

    const res = await axios.get("http://localhost:3001/api/verify", token);
    return res;

} 

