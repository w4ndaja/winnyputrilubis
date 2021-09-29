import React from 'react';
import { useRecoilValue } from 'recoil';
import { Redirect } from 'react-router-dom';
import { userState } from '../store';

export const AuthMiddleware = ({ children }) => {
    const user = useRecoilValue(userState);
    return user.id ? children : <Redirect to="/auth/login" />;
};
