import axios from 'axios';
import { atom, selector } from 'recoil';

export const refreshUserState = atom({
    key: 'refreshUserState',
    default: 1
});

export const authState = atom({
    key: 'authState',
    default: JSON.parse(localStorage.getItem('auth'))
});


export const userState = selector({
    key: 'userState',
    get: async ({ get }) => {
        const refreshCount = get(refreshUserState);
        const auth = get(authState);
        try {
            let { data } = await axios.get('me');
            return data;
        } catch (e) {
            localStorage.removeItem('auth');
            return {};
        }
    }
});
