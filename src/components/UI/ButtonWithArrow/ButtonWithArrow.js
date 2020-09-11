
import React from 'react';

import './ButtonWithArrow.css';

const ButtonWithArrow = props => {
    return (
        <div className="ButtonWithArrow">
            <button>{props.title}</button>

            <i className="fa fa-arrow-right" aria-hidden="true" />
        </div>
    )
};

export default ButtonWithArrow;