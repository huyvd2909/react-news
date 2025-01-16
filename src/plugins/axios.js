import axios from "axios";
import { NEWS_API_KEY } from "../constants";

const axiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2',
})

axiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apiKey: NEWS_API_KEY
    }
    return config
})

export default axiosInstance