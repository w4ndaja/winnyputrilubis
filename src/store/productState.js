import axios from "axios";
import { atom, selector } from "recoil";

export const productLinkState = atom({
    key: 'productLinkState',
    default: 'product-list'
});

export const productParamState = atom({
    key: 'productParamState',
    default: {}
});

export const selectedProductState = atom({
    key: 'selectedProductState',
    default: {}
});

export const productState = selector({
    key: 'productState',
    get: async ({ get }) => {
        const link = get(productLinkState);
        const params = get(productParamState);
        try {
            let { data } = await axios.get(link, { params });
            return data;
        } catch (e) {
            return {};
        }
    }
});
