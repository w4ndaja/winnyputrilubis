import React from 'react';

export const Spinner = ({...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={ { margin: 'auto', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%', display: 'block', shapeRendering: 'auto' } } {...props}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx={ 50 } cy={ 50 } fill="none" stroke="#0a0a0a" strokeWidth={ 4 } r={ 38 } strokeDasharray="179.0707812546182 61.690260418206066">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.625s" values="0 50 50;360 50 50" keyTimes="0;1" />
            </circle>
            {/* [ldio] generated by https://loading.io/ */ }</svg>

    );
};