import axios from "axios";

async function apiLogin(email, password) {
    const body = {
        email,
        password
    }
    const res = await axios.post("endpoint", body)
    return res
}

export default apiLogin