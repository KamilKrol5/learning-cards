import React, {Component} from 'react';
import FormInput from "../../common/FormInput";
import * as AuthActions from "../../../store/actions/authActions";
import {connect} from "react-redux";
import {withFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import './auth.css';
import '../../../style/error.css'

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
        this.props.resetState()
    }

    render() {

        const registerPage = <div className="m-auth-page-form-wrapper m-flex-ctr-cnt">
            <div
                style={{height: this.props.auth.registerErrorMessage && "45px"}}
                className="m-error-popup"
            >
                <p className="m-error-popup-p">{this.props.auth.registerErrorMessage}</p>
            </div>
            <form className="m-auth-page-form m-flex-ctr-cnt" method="post" onSubmit={e => {
                this.props.resetState();
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
        </div>;


        const registerSuccessfulPage = <div className="m-auth-page-form-wrapper">
            <div className="m-auth-page-reg-ok m-flex-ctr-cnt">
                <div className="m-auth-page-reg-ok-msg m-flex-ctr-cnt">
                    <svg className="m-auth-page-reg-ok-msg-img"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"
                    >
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                    <p className="m-auth-page-reg-ok-msg-p">
                        You have successfully signed up!
                    </p>
                </div>
                <div className="m-auth-page-reg-ok-lnk">
                    <Link className="m-nav-btn m-nav-link" to="/login">Login</Link>
                </div>
            </div>
        </div>;


        return (
            <div id="m-auth-page">
                <div className="m-auth-page-bg m-flex-ctr-cnt">
                    <Link to="/" className="m-auth-page-logo">LearningCards</Link>
                </div>
                {
                    this.props.auth.registerSuccessful ? registerSuccessfulPage : registerPage
                }
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
        resetState: () => {
            dispatch(AuthActions.resetState())
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

