import React from 'react';
import { Link, useRoute } from 'wouter';

export const NavLinkItem = ({ label = null, children = null, className = '', ...props }) => {
    const [isActive] = useRoute(props.href);
    return (
        <li className={className + (isActive ? " active" : "")}>
            <Link {...props}>
                {label || children}
            </Link>
            {children}
        </li>
    );
};
