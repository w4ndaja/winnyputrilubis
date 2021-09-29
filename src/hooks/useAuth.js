import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, userState } from '../store';

export const useAuth = () => {
    const user = useRecoilValue(userState);
    const setAuth = useSetRecoilState(authState);
    const login = data => setAuth(data);
    const logout = () => setAuth({});
    return { user, setAuth, login, logout };
};
