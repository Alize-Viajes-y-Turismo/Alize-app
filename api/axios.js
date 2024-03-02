import axios from "axios";

const instance = axios.create({
    baseURL: "https://hfjhbt27-3001.brs.devtunnels.ms/api",
    withCredentials: true,
})
export default instance;