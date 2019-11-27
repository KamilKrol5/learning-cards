import React, {Component} from 'react';
import FormInput from "../../common/FormInput";
import * as AuthActions from "../../../store/actions/authActions";
import {connect} from "react-redux";
import {withFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import './auth.css';

const fields = [
    {name: 'username', type: '', placeholder: 'username'},
    {name: 'email', type: 'email', placeholder: 'e-mail'},
    {name: 'password', type: 'password', placeholder: 'password'},
    {name: 'passwordOnceAgain', type: 'password', placeholder: 'confirm password'}
];

/**
 * Strona rejestracji
 */
class Register extends Component {

    componentDidMount() {
        this.props.resetErrorMessage()
    }

    render() {
        return (
            <div id="m-auth-page">
                <div className="m-auth-page-bg">
                    <Link to="/" className="m-auth-page-logo">LearningCards</Link>
                </div>
                <div className="m-auth-page-form-wrapper">
                    <div
                        style={{height: this.props.auth.registerErrorMessage && "45px"}}
                        className="m-auth-page-login-error"
                    >
                        <p className="m-auth-page-login-error-p">{this.props.auth.registerErrorMessage}</p>
                    </div>
                    <form className="m-auth-page-form" method="post" onSubmit={e => {
                        this.props.resetErrorMessage();
                        e.preventDefault();
                        this.props.register(this.props.values.username, this.props.values.email, this.props.values.password);
                    }}
                    >
                        {fields.map((field, index) => {
                            return (
                                <FormInput
                                    {...field}
                                    key={index}
                                    keyv={index}
                                    value={this.props.values[field.name]}
                                    touched={this.props.touched[field.name]}
                                    errors={this.props.errors[field.name]}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                />
                            )
                        })}
                        <button className="m-form-btn-submit">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        register: (username, email, password) => {
            dispatch(AuthActions.register(username, email, password))
        },
        resetErrorMessage: () => {
            dispatch(AuthActions.resetErrorMessage())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        username: '',
        email: '',
        password: '',
        passwordOnceAgain: '',
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, "Username too short").required("You need to enter an usename"),
        email: Yup.string().email("Incorrect email.").required("You need to enter an email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("You need to enter a password."),
        passwordOnceAgain: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords does not match.')
            .required('Password confirm is required'),
    }),
    handleSubmit: (values) => {
        console.log("Login attempt: ", values);
    }
})(Register));

