import React, { useEffect, useState } from 'react';

export const GroupInput = ({ label = null, error : _error = null, onChange = () => {}, ...props }) => {
    const [error, setError] = useState(_error)
    const change = e => {
        onChange(e)
        setError(null)
    }
    useEffect(() => setError(_error), [_error])
    return (
        <div className="group-input">
            <label htmlFor={ props.id || props.name || 'input' }>{ label }</label>
            <input className={`form-control rounded-0 ${error && 'is-invalid'}`} id={ props.id || props.name || 'input' } onChange={change} { ...props } />
            {error && <span className="invalid-feedback">{error.join(', ')}</span>}
        </div>
    );
};
