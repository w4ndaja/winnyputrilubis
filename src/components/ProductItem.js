import React from 'react';

export const ProductItem = ({children = null, img = null, sale = false, category = null, name = null, price = null, off = null}) => {
    return (
        <div className="product-item">
            <div className="pi-pic">
                {img && <img src={img} />}
                {sale && <div className="sale">Sale</div>}
                <div className="icon">
                    <i className="icon_heart_alt" />
                </div>
                <ul>
                    <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                    <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                </ul>
            </div>
            <div className="pi-text">
                {category && <div className="catagory-name">Coat</div>}
                {name && <a href="#">
                    <h5>{name}</h5>
                </a>}
                {price && <div className="product-price">
                    {price}
                    {off && <span>{off}</span>}
                </div>}
            </div>
        </div>
    );
};
