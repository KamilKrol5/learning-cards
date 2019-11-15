import React, {Component} from 'react';
import FormInput from "../common/FormInput";
import {withFormik} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import * as AuthActions from '../../store/actions/authAuctions';

const fields = [
    {name: 'email', type: 'email', placeholder: 'e-mail'},
    {name: 'password', type: 'password', placeholder: 'Password'},
];

class Login extends Component {
    render() {
        return (
            <div id="login-page">
                <form method="post" onSubmit={ e => {
                    e.preventDefault();
                    this.props.login(this.props.values.email, this.props.values.password);
                }}
                >
                    {fields.map((f, i) => {
                        return (
                            <FormInput
                                {...f}
                                key = {i}
                                keyv = {i}
                                value = {this.props.values[f.name]}
                                touched = {this.props.touched[f.name]}
                                errors = {this.props.errors[f.name]}
                                onChange = {this.props.handleChange}
                                onBlur = {this.props.handleBlur}
                            />
                        )
                    })}
                    <button className="btn-submit">Login</button>
                </form>
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
        password: Yup.string().required("You need to enter a password."),
    }),
    handleSubmit: (values) => {
        console.log("Login attempt: ", values);
    }
})(Login));