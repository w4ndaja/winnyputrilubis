import React, { useEffect, useRef } from 'react';

export const Select = ({ children = null, className = '', ...props }) => {
    const selectRef = useRef();
    useEffect(() => {
        window.$(selectRef.current).niceSelect();
    }, []);
    return (
        <select ref={selectRef} className={`${className}`} {...props}>
            {children}
        </select>
    );
};
