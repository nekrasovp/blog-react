
import React from 'react';

import './SectionHeader.css';

const SectionHeader = props => {
    return (
        <h2 className="SectionHeader">
            <span>{props.headerText}</span>
        </h2>
    )
};

export default SectionHeader;
