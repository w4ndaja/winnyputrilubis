import React, { useEffect } from 'react';
import { NavLink, NavLinkItem } from '.';
import { useAuth, useInfo } from '../hooks';
import { config, formatter } from '../lib';
import { categoryLinkState, categoryState } from '../store/categoryState';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState, productParamState, userState } from '../store';
import { useHistory } from 'react-router';
export const Header = () => {
    const {
        title,
        email,
        phone,
    } = useInfo();
    const categories = useRecoilValue(categoryState);
    const setLink = useSetRecoilState(categoryLinkState);
    const [productParams, setProductParams] = useRecoilState(productParamState);
    const carts = useRecoilValue(cartState);
    const { push } = useHistory();
    const { logout, user } = useAuth();
    return (
        <>
            {/* Header Section Begin */ }
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        { (email || phone) && <div className="ht-left">
                            { email && <div className="mail-service">
                                <i className=" fa fa-envelope" />
                                { email }
                            </div> }
                            { phone && <div className="phone-service">
                                <i className=" fa fa-phone" />
                                { phone }
                            </div> }
                        </div> }
                        <div className="ht-right">
                            { !user?.id ? <>
                                <NavLink to="/register" className="login-panel border-0">Daftar</NavLink>
                                <NavLink to="/login" className="login-panel border-0"><i className="fa fa-user" />Masuk</NavLink>
                            </> : <a href="" className="login-panel border-0" onClick={ logout }>Keluar</a> }
                            <div className="top-social border-0">
                                <a href="https://www.facebook.com"><i className="ti-facebook" /></a>
                                <a href="https://www.instagram.com"><i className="ti-instagram" /></a>
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
                                    <div className="input-group" style={ { maxWidth: '100%' } }>
                                        <input type="text" placeholder="Mau cari apa?" value={ productParams.q } onChange={ e => setProductParams(params => ({ ...params, q: e.target.value })) } />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                                <ul className="nav-right">
                                    {/* <li className="heart-icon">
                                        <a href="#">
                                            <i className="icon_heart_alt" />
                                            <span>1</span>
                                        </a>
                                    </li> */}
                                    <li className="cart-icon">
                                        <a href="#" onClick={ e => {
                                            e.preventDefault();
                                            return user?.id ? null : push('/login');
                                        } }>
                                            <i className="icon_bag_alt" />
                                            { !!carts.length && <span> { carts.length }</span> }
                                        </a>
                                        { !!carts.length && <div className="cart-hover">
                                            <div className="select-items">
                                                <table>
                                                    <tbody>
                                                        { carts?.map(cart => <tr key={ cart.id }>
                                                            <td className="si-pic"><img src="img/select-product-1.jpg" /></td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>{ formatter.format(cart.price) } x { cart.quantity }</p>
                                                                    <h6>{ cart.product.name }</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close" />
                                                            </td>
                                                        </tr>) }
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
                                        }
                                    </li>
                                    { !!carts.length && <li className="cart-price">{ formatter.format(carts.sum_total) }</li> }
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
                                <NavLinkItem to="/" label="Beranda"></NavLinkItem>
                                <NavLinkItem to="/shop" label="Belanja"></NavLinkItem>
                                <li>
                                    <a href="#">Kategori</a>
                                    <ul className="dropdown">
                                        { categories.data?.map(category => <NavLinkItem to={ `/shop/${category.slug}` } label={ category.name } />) }
                                    </ul>
                                </li>
                                {/* <li><a href="./blog.html">Blog</a></li>
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
                                </li> */}
                            </ul>
                        </nav>
                        <div id="mobile-menu-wrap" />
                    </div>
                </div>
            </header>
            {/* Header End */ }
        </>
    );
};
