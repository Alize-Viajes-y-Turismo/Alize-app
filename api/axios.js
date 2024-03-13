import axios from "axios";
import {EXPO_PUBLIC_API} from "../env.js"



const axiosApi = axios.create({

    baseURL: EXPO_PUBLIC_API + "api",
    withCredentials: true,

})

export default axiosApi;