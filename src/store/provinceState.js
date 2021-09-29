import axios from "axios";
import { selector } from "recoil";

export const provinceState = selector({
    key: 'provinceState',
    get: async ({ get }) => {
        try {
            let { data } = await axios.get('provinces');
            return data;
        } catch (e) {
            return [];
        }
    }
});