
import React from 'react';
import { connect } from 'react-redux';

import {enterAction} from '../../actions/actions';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './Enter.css';

class Enter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            showAuthError: false,
            formControls: {
                login: {
                    value: '',
                    type: 'text',
                    label: 'Login',
                    errorMessage: 'Enter login',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Enter password',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true
                    }
                }
            }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    submitHandler = event => {
        event.preventDefault();
    };

    isRightAuthData = (login, password) => {
        const people = this.props.people;

        for (let i = 0; i < people.length; i++) {
            if ((people[i].login === login) && (people[i].password === password)) {
                return true;
            }
        }
        return false;
    };

    validateControls = () => {
        const {login, password} = this.state.formControls;

        if (this.isRightAuthData(login.value, password.value)) {
            this.props.enter(login.value);
        }
        else {
            this.setState({
                showAuthError: true
            })
        }
    };

    validateControl = value => {
        return value.trim() !== ''
    };

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="Enter">
                <SectionHeader headerText="Welcome back" />

                <form onSubmit={this.submitHandler}>
                    { this.renderInputs() }

                    {this.state.showAuthError
                        ? <p className="enterErrorMessage"></p>
                        : null
                    }

                    <Button title="Continue" type="button" disabled={!this.state.isFormValid} onClick={this.validateControls} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        enter: (login) => dispatch(enterAction(login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enter);

