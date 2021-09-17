import React from 'react';
import { BannerSection, DealOfThe, HeroSection, InstaPhoto, ManBanner, WomenBanner } from '../components';

export const Home = () => {
    return (
        <>
            <HeroSection />
            {/* Banner Section Begin */ }
            <BannerSection />
            {/* Banner Section End */ }
            {/* Women Banner Section Begin */ }
            <WomenBanner />
            {/* Women Banner Section End */ }
            {/* Deal Of The Week Section Begin*/ }
            <DealOfThe />
            {/* Deal Of The Week Section End */ }
            {/* Man Banner Section Begin */ }
            <ManBanner />
            {/* Man Banner Section End */ }
            {/* Instagram Section Begin */ }
            <InstaPhoto />
            {/* Instagram Section End */ }
            {/* Latest Blog Section Begin */ }
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-1.jpg" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>The Best Street Style From London Fashion Week</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-2.jpg" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-3.jpg" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="benefit-items">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-1.png" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Free Shipping</h6>
                                        <p>For all order over 99$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-2.png" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Delivery On Time</h6>
                                        <p>If good have prolems</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-1.png" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Secure Payment</h6>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Blog Section End */ }
        </>
    );
};
