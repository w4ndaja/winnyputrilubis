import React from 'react';
import { Footer, Header, PartnerLogo, Preloader } from '../components';

export const AppLayout = ({ children }) => {
    return (
        <>
            <Preloader />
            <Header />
            {children}
            <PartnerLogo />
            <Footer />
        </>
    );
};
