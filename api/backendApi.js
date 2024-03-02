import axios from "axios";
import {EXPO_PUBLIC_API} from "@env"

const backendApi = axios.create({
    baseURL: EXPO_PUBLIC_API + "api",
    withCredentials: true,
})
export default backendApi;