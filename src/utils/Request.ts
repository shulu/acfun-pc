import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    timeout: 120000, // 请求超时时间
    responseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
});

// request拦截器
service.interceptors.request.use(
    (config) => {
        if (!config.headers) {
            throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
        }
        return config;
    },
    (error) => {
        console.error(error);
        Promise.reject(error);
    },
);

// response 拦截器
service.interceptors.response.use(
    (response) => {
        const status: number = response.status;
        if (status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response.statusText);
        }
    },
    (error) => {
        return Promise.reject(error.message);
    },
);

export default service;
