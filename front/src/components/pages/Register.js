import React, {Component} from 'react';
import FormInput from "../common/FormInput";
import * as AuthActions from "../../store/actions/authActions";
import {connect} from "react-redux";
import {withFormik} from "formik";
import * as Yup from "yup";

const fields = [
    {name: 'username', type: '', placeholder: 'username'},
    {name: 'email', type: 'email', placeholder: 'e-mail'},
    {name: 'password', type: 'password', placeholder: 'password'},
];


class Register extends Component {
    render() {
        return (
            <div>
                <form method="post" onSubmit={e => {
                    e.preventDefault();
                    this.props.register(this.props.values.email, this.props.values.password);
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
                    <button className="btn-submit">Sign up</button>
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
        register: (username, email, password) => {
            dispatch(AuthActions.register(username, email, password))
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
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, "Username too short").required("You need to enter an usename"),
        email: Yup.string().email("Incorrect email.").required("You need to enter an email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("You need to enter a password."),
    }),
    handleSubmit: (values) => {
        console.log("Login attempt: ", values);
    }
})(Register));

