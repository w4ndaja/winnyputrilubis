import React from 'react';
import { Link, useRoute } from 'wouter';

export const NavLink = ({ className = '', ...props }) => {
    const [isActive] = useRoute(props.href);
    return (
        <Link {...{ ...props, className: className + (isActive ? " active" : "") }}>
            {props.children}
        </Link>
    );
};
