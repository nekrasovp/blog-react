
import React from "react";
import { connect } from 'react-redux';

import {registerAction} from '../../actions/actions';
import {random5} from '../../usefulFunctions/usefulFunctions';
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './Register.css';

const newDate = new Date();
const maxDate = new Date(newDate.getFullYear() - 14, newDate.getMonth(), newDate.getDate());
const minDate = new Date(1900, 0, 1);

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            formControls: {
                name: {
                    value: '',
                    type: 'text',
                    label: 'Name',
                    errorMessage: 'Enter name',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true
                    }
                },
                surname: {
                    value: '',
                    type: 'text',
                    label: 'Surname',
                    errorMessage: 'Enter surname',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true
                    }
                },
                birthDate: {
                    data: '2000-01-01',
                    value: '2000-01-01',
                    type: 'date',
                    label: 'Birth date',
                    errorMessage: 'Choose birth day',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        date: true,
                        maxDate: maxDate,
                        minDate: minDate
                    }
                },
                login: {
                    value: '',
                    type: 'text',
                    label: 'Login',
                    errorMessage: 'Login is already registered',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        uniqueLogin: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Password must be at least 6 charecters long',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6,
                        maxLength: 30
                    }
                }
            }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    stringToDate = (string) => {
        return new Date(string.slice(0,4), string.slice(5,7) - 1, string.slice(8,10));
    };

    isLoginUnique = (login) => {
        const people = this.props.people;
        for (let i = 0; i < people.length; i++) {
            if (people[i].login.toLowerCase() === login.toLowerCase()) {
                return false;
            }
        }
        return true;
    };

    submitHandler = event => {
        event.preventDefault();
    };

    validateControl = (value, validation) => {

        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.date) {
            const date = this.stringToDate(value);
            isValid = (date >= minDate) && (date < maxDate) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid
        }

        if (validation.uniqueLogin) {
            isValid = this.isLoginUnique(value) && isValid;
        }

        return isValid
    };

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

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

    enter = () => {
        const birthDate = this.state.formControls.birthDate.value;
        const date = this.stringToDate(birthDate);

        const newUserInfo = {
            id: random5(),
            name: this.state.formControls.name.value,
            surname: this.state.formControls.surname.value,
            birthDate: date,
            login: this.state.formControls.login.value,
            password: this.state.formControls.password.value
        };

        this.props.register(newUserInfo);
    };

    renderHeading() {
        const people = this.props.people;
        return(
            <p>
                join our community of {people.length} amazing bloggers.
            </p>
        )
    };

    render() {
        return (
            <div className="Register">
                <SectionHeader headerText="Welcome" />
                { this.renderHeading() }
                <form onSubmit={this.submitHandler}>
                    { this.renderInputs() }
                    <Button type="button" title="Continue" disabled={!this.state.isFormValid} onClick={this.enter} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (newUserInfo) => dispatch(registerAction(newUserInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

