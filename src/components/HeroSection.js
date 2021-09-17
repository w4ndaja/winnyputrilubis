import React from 'react';
import { SetBg } from '.';
import { OwlCarousel } from './OwlCarousel';

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <OwlCarousel className="hero-items" config={{
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                dots: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true,
            }}>
                <SetBg className="single-hero-items set-bg" data-setbg="img/hero-1.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</p>
                                <a href="#" className="primary-btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="off-card">
                            <h2>Sale <span>50%</span></h2>
                        </div>
                    </div>
                </SetBg>
                <SetBg className="single-hero-items set-bg" data-setbg="img/hero-2.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</p>
                                <a href="#" className="primary-btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="off-card">
                            <h2>Sale <span>50%</span></h2>
                        </div>
                    </div>
                </SetBg>
            </OwlCarousel>
        </section>
    );
};
