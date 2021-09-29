import React from 'react';
import { Link, Route } from 'react-router-dom';

export const NavLink = ({ className = '', ...props }) => {
    return (
        <Route path={props.to}>
            { ({ match }) => <>
                <Link { ...{ ...props, className: className + (match ? " active" : "") } }>
                    { props.children }
                </Link>
            </> }
        </Route>
    );
};
