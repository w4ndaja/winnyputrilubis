import React from 'react';
import { useRecoilValue } from 'recoil';
import { Redirect } from 'react-router-dom';
import { userState } from '../store';

export const GuestMiddleware = ({ children }) => {
    const user = useRecoilValue(userState);
    return (
        <>
            {user.id ? <Redirect to="/dashboard" /> : children}
        </>
    );
};
