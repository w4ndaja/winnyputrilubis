import axios from "axios";
axios.interceptors.request.use(config => {
    const token = JSON.parse(localStorage.getItem('auth') || "{}").token;
    config.baseURL = process.env.REACT_APP_BASE_API;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
axios.interceptors.response.use(res => res, err => {
    if (err.response.status == 401) {
        localStorage.removeItem('auth');
        window.dispatchEvent(new CustomEvent('unauthenticated', { detail: err }));
    }
    return err;
});
