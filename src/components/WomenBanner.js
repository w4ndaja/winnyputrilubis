import React from 'react';
import { ProductItem, SetBg, Tab } from '.';
import { OwlCarousel } from './OwlCarousel';

export const WomenBanner = () => {
    return (
        <>
            <section className="women-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <SetBg className="product-large" data-setbg="img/products/women-large.jpg">
                                <h2>Women’s</h2>
                                <a href="#">Discover More</a>
                            </SetBg>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <Tab>
                                <OwlCarousel className="product-slider owl-carousel" label="Clothings">
                                    <ProductItem name="Baju" img="img/products/women-1.jpg" sale category="Shoe" price="Rp 20.000" />
                                    <ProductItem name="Baju" img="img/products/women-2.jpg" sale category="Shoe" price="Rp 20.000" />
                                    <ProductItem name="Baju" img="img/products/women-3.jpg" sale category="Shoe" price="Rp 20.000" />
                                </OwlCarousel>
                                <div label="Clothings">
                                    Test
                                </div>
                            </Tab>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
