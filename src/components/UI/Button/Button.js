
import React from 'react';

import './Button.css';

const Button = props => {
    const onButtonClick = props.onClick || null;

    return (
        <div className="Button">
            <button
                type={props.type || "button"}
                disabled={props.disabled}
                onClick={onButtonClick}
            >
                {props.title}
            </button>
        </div>
    )
};

export default Button;