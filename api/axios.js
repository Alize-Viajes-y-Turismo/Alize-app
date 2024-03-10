import axios from "axios";

const axiosApi = axios.create({

    baseURL: process.env.API,
    withCredentials: true,

})

export default axiosApi;