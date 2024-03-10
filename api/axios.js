import axios from "axios";



const axiosApi = axios.create({

    baseURL: process.env.API + "api",
    withCredentials: true,

})

export default axiosApi;