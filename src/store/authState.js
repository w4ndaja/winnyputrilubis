import axios from 'axios';
import { atom, selector } from 'recoil';
import { io } from 'socket.io-client';
import { publicSocket } from '../lib';

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
            publicSocket.emit('connectToAdmin', JSON.parse(localStorage.getItem('auth') || "{}").token);
            window.userSocket = io(process.env.REACT_APP_BROADCAST_URL, {path : `/${data.email}/`})
            return data;
        } catch (e) {
            localStorage.removeItem('auth');
            return {};
        }
    }
});
