import React from 'react';

export const Breadcrumb = ({children}) => {
    return (
        <div className="breacrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
