import axios from "axios";
import { atom, selector } from "recoil";

export const selectedCategoryState = atom({
    key: 'selectedCategoryState',
    default: {}
});

export const categoryLinkState = atom({
    key: 'categoryLinkState',
    default: 'category-list'
});

export const categoryParamState = atom({
    key: 'categoryParamState',
    default: {}
});

export const categoryState = selector({
    key: 'categoryState',
    get: async ({ get }) => {
        const params = get(categoryParamState);
        const link = get(categoryLinkState);
        try {
            let { data } = await axios.get(link, { params });
            return data;
        } catch (e) {
            return {};
        }
    }
});
