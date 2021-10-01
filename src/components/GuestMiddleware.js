import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Redirect } from 'react-router-dom';
import { redirectToState, userState } from '../store';

export const GuestMiddleware = ({ children }) => {
    const user = useRecoilValue(userState);
    const [redirectTo, setRedirectTo] = useRecoilState(redirectToState);
    if (redirectTo !== '' && user.id) {
        const _redirectTo = `${redirectTo}`;
        setRedirectTo('');
        return <Redirect to={ _redirectTo } />;
    }
    return (
        <>
            { user.id ? <Redirect to="/dashboard" /> : children }
        </>
    );
};
