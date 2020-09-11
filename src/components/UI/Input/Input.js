
import React from 'react';

import './Input.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text';
    const maxLength = props.maxLength || '';
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className="Input">
            {inputType === 'textarea'
                ?
                <div className="Input">
                    <label htmlFor={htmlFor}>{props.label}</label>

                    <textarea
                        id={htmlFor}
                        value={props.value}
                        onChange={props.onChange || null}
                        maxLength={maxLength}
                        autoComplete="on"
                    />
                </div>
                :
                <div className="Input">
                    <label htmlFor={htmlFor}>{props.label}</label>

                    <input
                        id={htmlFor}
                        value={props.value}
                        type={props.type}
                        maxLength={maxLength}
                        onChange={props.onChange || null}
                        autoComplete="on"
                    />
                </div>
            }
            {
                isInvalid(props)
                    ? <p className="inputErrorMessage">{props.errorMessage || 'Enter valid information'}</p>
                    : null
            }
        </div>
    )
};

export default Input;
