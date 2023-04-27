import { logRequestedUrl } from "@/helper/utills/services";
import _axios from "axios";

const headers = { "Content-Type": "application/json" };

const axios = _axios.create({
    headers,
    baseURL: mainUrl,
});

axios.interceptors.request.use(
    function (config) {
        logRequestedUrl(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;