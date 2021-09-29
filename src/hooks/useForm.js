import axios from 'axios';
import { useState } from 'react';
export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const makeRequest = async (url, { method = 'get', onSuccess = () => { }, onError = () => { } }) => {
        setLoading(true);
        try {
            let { data } = await axios[method](url, form);
            onSuccess(data);
            setLoading(false);
        } catch (e) {
            setErrors(e?.response?.data?.errors || {});
            onError(e?.response?.data?.errors || e);
            setLoading(false);
        }
    };
    const resetError = (name = null) => setErrors(errors => name ? { ...errors, [name]: null } : {});
    const bindForm = e => {
        resetError(e.target.name);
        return setForm(form => ({ ...form, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
    };
    return {
        form,
        errors,
        resetError,
        reset: () => setForm(initialState),
        bindForm,
        post: (url, config) => makeRequest(url, { ...config, method: 'post' }),
        put: (url, config) => makeRequest(url, { ...config, method: 'put' }),
        setForm,
        loading,
    };
};
