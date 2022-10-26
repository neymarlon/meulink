import axios from 'axios';

export const key = "e6d859581e621144e0f89898a5d2e23dcbce9fae";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;