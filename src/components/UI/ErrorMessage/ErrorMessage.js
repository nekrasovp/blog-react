
import React from 'react';
import { Link } from 'react-router-dom';

import ButtonWithArrow from '../ButtonWithArrow/ButtonWithArrow';
import './ErrorMessage.css';

const ErrorMessage = props => {
    return (
        <div className="ErrorMessage">
            <i className="fa fa-exclamation" aria-hidden="true" />

            <h2>Error</h2>

            <p>{props.errorMessage}</p>

            <Link to={props.link}>
                <ButtonWithArrow title={props.buttonText} />
            </Link>
        </div>
    )
};

export default ErrorMessage;

