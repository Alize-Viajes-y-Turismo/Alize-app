import axios from "axios"

export async function sentRecoveryMail(email) {
    const body = {
        email: email
    }
    const res = await axios.post("/api/recoveryMail", body);
    return res;
} 

