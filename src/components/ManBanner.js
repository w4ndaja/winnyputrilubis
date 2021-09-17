import React from 'react';
import { ProductItem, SetBg, Tab } from '.';
import { OwlCarousel } from './OwlCarousel';

export const ManBanner = () => {
    return (
        <section className="man-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <Tab>
                            <OwlCarousel className="product-slider" label="Clothings">
                                <ProductItem name="Man 1" img="img/products/man-1.jpg" category="Coat" price="Rp. 35.000" />
                                <ProductItem name="Man 2" img="img/products/man-2.jpg" category="Coat" price="Rp. 35.000" />
                                <ProductItem name="Man 3" img="img/products/man-3.jpg" category="Coat" price="Rp. 35.000" />
                                <ProductItem name="Man 4" img="img/products/man-4.jpg" category="Coat" price="Rp. 35.000" />
                            </OwlCarousel>
                        </Tab>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <SetBg className="product-large set-bg m-large" data-setbg="img/products/man-large.jpg">
                            <h2>Men’s</h2>
                            <a href="#">Discover More</a>
                        </SetBg>
                    </div>
                </div>
            </div>
        </section>
    );
};
