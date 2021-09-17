import { useState } from 'react';
import { api } from '../lib';
export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const makeRequest = async (url, { method = 'get', onSuccess = () => { }, onError = () => { } }) => {
        try {
            let { data } = await api[method](url, form);
            onSuccess(data);
        } catch (e) {
            setErrors(e?.response?.data?.errors || {});
            onError(e?.response?.data?.errors || {});
        }
    };
    return {
        form,
        errors,
        resetError : () => setErrors({}),
        reset: () => setForm(initialState),
        bindForm: e => setForm(form => ({ ...form, [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value })),
        post: (url, config) => makeRequest(url, { ...config, method: 'post' }),
        put: (url, config) => makeRequest(url, { ...config, method: 'put' }),
    };
};
