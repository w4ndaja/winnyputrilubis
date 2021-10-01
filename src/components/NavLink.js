import React from 'react';
import { Link, Route } from 'react-router-dom';

export const NavLink = ({ className = '', activeClass = null, ...props }) => {
    return (
        <Route path={ props.to }>
            { ({ match }) => <>
                <Link { ...{ ...props, className: className + (match ? ` ${activeClass || "active"}` : "") } }>
                    { props.children }
                </Link>
            </> }
        </Route>
    );
};
