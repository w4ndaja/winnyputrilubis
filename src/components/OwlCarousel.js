import React, { useEffect, useRef } from 'react';

export const OwlCarousel = ({className = "", children, config = null, ...props}) => {
    const owlCarouselRef = useRef()
    useEffect(() => {
        window.$(owlCarouselRef.current).owlCarousel(config);
    })
    return (
        <div className={`owl-carousel ${className}`} {...props} ref={owlCarouselRef}>
            {children}
        </div>
    );
};
