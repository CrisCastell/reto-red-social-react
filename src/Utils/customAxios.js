import { url } from "./Constants";
import axios from 'axios'

export const customAxios = axios.create({
    baseURL: url,
    headers: {
        'app-id': '60e650dd7d86571be76a3531'
    }
});