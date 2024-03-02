import axios from "axios";
import {EXPO_PUBLIC_API} from "../env.js"

const backendApi = axios.create({

    baseURL: EXPO_PUBLIC_API,
    withCredentials: true,

})
export default backendApi;