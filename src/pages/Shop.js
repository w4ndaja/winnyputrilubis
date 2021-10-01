import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { NavLink, Select } from '../components';
import { useAuth } from '../hooks';
import { changeCurrencyValue, formatter } from '../lib';
import { addToCartState, productParamState, productState } from '../store';
import { categoryState, selectedCategoryState } from '../store/categoryState';

export const Shop = () => {
    const categories = useRecoilValue(categoryState);
    const [productParams, setProductParams] = useRecoilState(productParamState);
    const { state: productStatus, contents: products } = useRecoilValueLoadable(productState);
    const { category } = useParams();
    useEffect(() => {
        setProductParams(params => ({ ...params, category: category }));
    }, [category]);
    const addToCart = useSetRecoilState(addToCartState);
    const {user} = useAuth()
    const {push} = useHistory()
    return (
        <>
            {/* Breadcrumb Section Begin */ }
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <a href="#"><i className="fa fa-home" /> Beranda</a>
                                <span>Belanja</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section Begin */ }
            {/* Product Shop Section Begin */ }
            <section className="product-shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                            <div className="filter-widget">
                                <h4 className="fw-title">Kategori</h4>
                                <ul className="filter-catagories">
                                    <li><Link to={ `/shop` }>Semua Kategori</Link></li>
                                    { categories.data?.map(category => <li key={ category.id }><NavLink activeClass="text-warning" to={ `/shop/${category.slug}` }>{ category.name }</NavLink></li>) }
                                </ul>
                            </div>
                            <div className="filter-widget">
                                <label for="preorder" className="fw-title h4 mr-3">Pre Order</label>
                                <input type="checkbox" name="preorder" id="preorder" />
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Harga</h4>
                                <input type="text" className="form-control mb-3" value={ formatter.format(productParams.price_min || 0) } onChange={ e => changeCurrencyValue(e, ev => setProductParams(params => ({ ...params, price_min: ev.target.value }))) } />
                                <input type="text" className="form-control mb-3" value={ formatter.format(productParams.price_max || 0) } onChange={ e => changeCurrencyValue(e, ev => setProductParams(params => ({ ...params, price_max: ev.target.value }))) } />
                            </div>
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="product-show-option">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="select-option" style={ { gap: 3 } }>
                                            <Select value={ productParams.per_page } onChange={ e => setProductParams(params => ({ ...params, per_page: e.target.value })) }>
                                                <option value="">Show:</option>
                                                <option>10</option>
                                                <option>25</option>
                                                <option>100</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 text-right">
                                        <p>Menampilkan { products?.from } - { products?.to } dari { products?.total } Produk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                <div className="row">
                                    { productStatus == 'hasValue' && products?.data?.map(product => <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                { product.images[0]?.path ? <img src={ process.env.REACT_APP_BASE_IMAGE + product.images[0]?.path } /> : <div className="img-thumbnail" style={ { minHeight: 240 } }></div> }
                                                <div className="sale pp-sale">Sale</div>
                                                <div className="icon">
                                                    <i className="icon_heart_alt" />
                                                </div>
                                                <ul>
                                                    <li className="w-icon active"><a href="" onClick={ e => {
                                                        e.preventDefault();
                                                        return user?.id ? addToCart(product) : push('/login')
                                                    } }><i className="icon_bag_alt" /></a></li>
                                                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">{ product.category.name }</div>
                                                <a href="#">
                                                    <h5>{ product.name }</h5>
                                                </a>
                                                <div className="product-price">
                                                    { formatter.format(product.price) }
                                                    {/* <span>$35.00</span> */ }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Shop Section End */ }
        </>
    );
};
