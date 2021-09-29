import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

export const useCrud = ({ url: _url = null, data: _data = [], paginated = false }) => {
    const [data, setData] = useState(_data);
    const [links, setLinks] = useState([]);
    const [perpage, setPerpage] = useState(10);
    const [q, setQ] = useState('');
    const [state, setState] = useState('store');
    const [url, setUrl] = useState(_url);
    const debounce = window._.debounce;
    const [loading, setLoading] = useState(true);
    const getData = useCallback(debounce(async (url, params = {}) => {
        setLoading(true);
        try {
            let { data } = await axios.get(url, { params });
            setData(paginated ? data.data : data);
            setLinks(data.links || []);
            setLoading(false);
        } catch (e) {
            setData([]);
            setLinks([]);
            setLoading(false);
        }
    }, 300), []);
    const storeData = newData => setData(data => [newData, ...data]);
    const patchData = newData => setData(data => data.map(item => item.id == newData.id ? newData : item));
    const destroyData = toDestroy => setData(data => data.filter(item => item.id !== toDestroy.id));
    useEffect(() => {
        getData(url, { perpage, q });
    }, [url, perpage, q]);
    return { data, links, perpage, q, setPerpage, setQ, storeData, patchData, destroyData, state, setState, setUrl, url, loading };
};
