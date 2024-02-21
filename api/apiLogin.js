import axios from "axios";

async function apiLogin(email, password) {
    const body = {
        email,
        password
    }
    const res = await axios.post("http://localhost:4000/login", body)
    return res
}

export default apiLogin