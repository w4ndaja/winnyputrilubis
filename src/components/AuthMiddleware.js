import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Redirect, useLocation } from 'react-router-dom';
import { redirectToState, userState } from '../store';

export const AuthMiddleware = ({ children }) => {
    const user = useRecoilValue(userState);
    const setRedirectTo = useSetRecoilState(redirectToState);
    const location = useLocation();
    if (!user.id) {
        setRedirectTo(location.pathname);
    }
    return user.id ? children : <Redirect to="/auth/login" />;
};
