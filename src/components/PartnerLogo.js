import React from 'react';
import { OwlCarousel } from './OwlCarousel';

export const PartnerLogo = () => {
    return (
        <>
            {/* Partner Logo Section Begin */}
            <div className="partner-logo">
                <div className="container">
                    <OwlCarousel className="logo-carousel owl-carousel">
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-1.png" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-2.png" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-3.png" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-4.png" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-5.png" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* Partner Logo Section End */}
        </>
    );
};
