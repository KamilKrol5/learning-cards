//dependencies
import React, {Component} from 'react';
import {withFormik} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
//components
import FormInput from "../../common/FormInput";
//redux actions
import * as AuthActions from '../../../store/actions/authActions';
//css
import './login.css';
import {Link} from "react-router-dom";

const fields = [
    {name: 'email', type: 'email', placeholder: 'e-mail'},
    {name: 'password', type: 'password', placeholder: 'password'},
];

/**
 * Komponent zawierający stronę logowania
 */
class Login extends Component {
    render() {
        return (
            <div id="m-login-page">
                <div className="m-login-page-bg">
                    <Link to="/" className="m-login-page-logo">LearningCards</Link>
                </div>
                <div className="m-login-page-form-wrapper">
                    <form className="m-login-page-form" method="post" onSubmit={e => {
                        e.preventDefault();
                        this.props.login(this.props.values.email, this.props.values.password);
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
                        <button className="m-form-btn-submit">Login</button>
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
        login: (email, password) => {
            dispatch(AuthActions.login(email, password))
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Incorrect email.").required("You need to enter an email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("You need to enter a password."),
    }),
    handleSubmit: (values) => {
        console.log("Login attempt: ", values);
    }
})(Login));