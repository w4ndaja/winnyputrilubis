import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, userState } from '../store';

export const useAuth = () => {
    const user = useRecoilValue(userState);
    const setAuth = useSetRecoilState(authState);
    const login = data => {
        localStorage.setItem('auth', JSON.stringify(data));
        setAuth(data);
    };
    const logout = e => {
        e?.preventDefault();
        setAuth({});
        localStorage.removeItem('auth');
    };
    return { user, setAuth, login, logout };
};
