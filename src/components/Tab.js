import React, { useState } from 'react';

export const Tab = ({ children }) => {
    const [tab, setTab] = useState(children[0] || children);
    return (
        <>
            <div className="filter-control">
                <ul>
                    {(children.length ? children : [children]).map((item, i) => <li onClick={() => setTab(item)} className={tab == item ? 'active' : ''} key={i}>{item.props.label}</li>)}
                </ul>
            </div>
            {tab}
        </>
    );
};
