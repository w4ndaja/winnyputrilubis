import React, { useEffect } from 'react';
import { NavLink, NavLinkItem } from '.';
import { useInfo } from '../hooks';
import { config } from '../lib';

export const Header = () => {
    const {
        title,
        email,
        phone,
    } = useInfo();
    return (
        <>
            {/* Header Section Begin */}
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        {(email || phone) && <div className="ht-left">
                            {email && <div className="mail-service">
                                <i className=" fa fa-envelope" />
                                {email}
                            </div>}
                            {phone && <div className="phone-service">
                                <i className=" fa fa-phone" />
                                {phone}
                            </div>}
                        </div>}
                        <div className="ht-right">
                            <NavLink href="/register" className="login-panel border-0">Register</NavLink>
                            <NavLink href="/login" className="login-panel border-0"><i className="fa fa-user" />Login</NavLink>
                            <div className="lan-selector border-0">
                                <select className="language_drop" name="countries" id="countries" style={{ width: 300 }}>
                                    <option value="yt" data-image="img/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
                                    <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
                                </select>
                            </div>
                            <div className="top-social border-0">
                                <a href="#"><i className="ti-facebook" /></a>
                                <a href="#"><i className="ti-twitter-alt" /></a>
                                <a href="#"><i className="ti-linkedin" /></a>
                                <a href="#"><i className="ti-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <a href="./index.html">
                                        <img src="img/logo.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="advanced-search">
                                    <button type="button" className="category-btn">All Categories</button>
                                    <div className="input-group">
                                        <input type="text" placeholder="What do you need?" />
                                        <button type="button"><i className="ti-search" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                                <ul className="nav-right">
                                    <li className="heart-icon">
                                        <a href="#">
                                            <i className="icon_heart_alt" />
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="cart-icon">
                                        <a href="#">
                                            <i className="icon_bag_alt" />
                                            <span>3</span>
                                        </a>
                                        <div className="cart-hover">
                                            <div className="select-items">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="si-pic"><img src="img/select-product-1.jpg" /></td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="si-pic"><img src="img/select-product-2.jpg" /></td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>$120.00</h5>
                                            </div>
                                            <div className="select-button">
                                                <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                                <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-price">$150.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="container">
                        <div className="nav-depart">
                            <div className="depart-btn">
                                <i className="ti-menu" />
                                <span>All departments</span>
                                <ul className="depart-hover">
                                    <li className="active"><a href="#">Women’s Clothing</a></li>
                                    <li><a href="#">Men’s Clothing</a></li>
                                    <li><a href="#">Underwear</a></li>
                                    <li><a href="#">Kid's Clothing</a></li>
                                    <li><a href="#">Brand Fashion</a></li>
                                    <li><a href="#">Accessories/Shoes</a></li>
                                    <li><a href="#">Luxury Brands</a></li>
                                    <li><a href="#">Brand Outdoor Apparel</a></li>
                                </ul>
                            </div>
                        </div>
                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <NavLinkItem href="/" label="Home"></NavLinkItem>
                                <NavLinkItem href="/shop" label="Shop"></NavLinkItem>
                                <li><a href="#">Collection</a>
                                    <ul className="dropdown">
                                        <NavLinkItem href="" label="Men's" />
                                        <NavLinkItem href="" label="Women's" />
                                        <NavLinkItem href="" label="Kid's" />
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                        <li><a href="./check-out.html">Checkout</a></li>
                                        <li><a href="./faq.html">Faq</a></li>
                                        <li><a href="./register.html">Register</a></li>
                                        <li><a href="./login.html">Login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div id="mobile-menu-wrap" />
                    </div>
                </div>
            </header>
            {/* Header End */}
        </>
    );
};
