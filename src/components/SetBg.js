import React, { useEffect, useRef } from 'react'

export const SetBg = ({children, ...props}) => {
    const setBgRef = useRef()
    const $ = window.$
    useEffect(() => {
        $(setBgRef.current).each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])
    return (
        <div ref={setBgRef} {...props}>
            {children}
        </div>
    )
}
