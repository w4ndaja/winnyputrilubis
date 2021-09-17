import React from 'react';

export const Checkbox = ({ label, ...props }) => {
    return (
        <label htmlFor={ props.id || props.name || 'checkbox' }>
            { label }
            <input type="checkbox" id={ props.id || props.name || 'checkbox' } { ...props } />
            <span className="checkmark" />
        </label>
    );
};
