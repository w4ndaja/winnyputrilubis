import React from 'react';
import { Link, Route } from 'react-router-dom';

export const NavLinkItem = ({ label = null, children = null, className = '', ...props }) => {
    return (
        <Route path={props.to}>
            { ({ match }) => <>
                <li className={ className + (match && match.isExact ? " active" : "") }>
                    <Link { ...props }>
                        { label || children }
                    </Link>
                    { children }
                </li>
            </> }
        </Route>
    );
};
