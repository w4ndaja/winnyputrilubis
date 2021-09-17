import React from 'react';

export const BannerSection = () => {
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <img src="img/banner-1.jpg" />
                            <div className="inner-text">
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <img src="img/banner-2.jpg" />
                            <div className="inner-text">
                                <h4>Women’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <img src="img/banner-3.jpg" />
                            <div className="inner-text">
                                <h4>Kid’s</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
