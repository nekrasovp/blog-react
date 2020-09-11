
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {exitAction} from '../../actions/actions';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Button from '../UI/Button/Button';
import './Exit.css';

class Exit extends React.Component {

    exitHandler = () => {
        this.props.exit();
    };

    render() {
        return (
            <div className="Exit">
                <SectionHeader headerText="Signout" />

                <div className="ExitQuestionWrapper">
                    <p className="ExitQuestion">Are you sure you wanna exit?</p>

                    <Button type="button" title="Yes" onClick={this.exitHandler} />

                    <Link to="/">
                        <Button type="button" title="No" />
                    </Link>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        exit: () => dispatch(exitAction())
    }
}

export default connect(null, mapDispatchToProps)(Exit);

