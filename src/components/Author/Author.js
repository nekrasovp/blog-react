
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {beautifulDate} from '../../usefulFunctions/usefulFunctions';
import './Author.css';

const Author = props => {
    return (
        <div className="Author">
            <i className="fa fa-user" aria-hidden="true" />

            <div className="authorInfo">
                <Link to={"/authors/" + props.authorInfo.id}>
                    <h3
                        className="fullName"
                        onClick={() => props.history.push('/authors/' + props.authorInfo.id)}
                    >
                        {props.authorInfo.name} {props.authorInfo.surname}
                    </h3>
                </Link>

                <p className="birthDate">
                    Birth date: {beautifulDate(props.authorInfo.birthDate)}
                </p>

                <p className="login">
                    Login: {props.authorInfo.login}
                </p>
            </div>
        </div>
    )
};

export default withRouter(Author);