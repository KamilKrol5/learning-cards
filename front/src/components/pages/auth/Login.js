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
import './auth.css';
import {Link} from "react-router-dom";
import '../../../style/error.css'

const fields = [
    {name: 'username', type: 'text', placeholder: 'username'},
    {name: 'password', type: 'password', placeholder: 'password'},
];

/**
 * Komponent zawierający stronę logowania
 */
class Login extends Component {

    componentDidMount() {
        this.props.resetState()
    }

    render() {
        return (
            <div id="m-auth-page">
                <div className="m-auth-page-bg m-flex-ctr-cnt">
                    <Link to="/" className="m-auth-page-logo">LearningCards</Link>
                </div>
                <div className="m-auth-page-form-wrapper m-flex-ctr-cnt">
                    <div
                        style={{height: this.props.auth.loginErrorMessage && "45px"}}
                        className="m-error-popup"
                    >
                        <p className="m-error-popup-p">{this.props.auth.loginErrorMessage}</p>
                    </div>
                    <form className="m-auth-page-form m-flex-ctr-cnt" method="post" onSubmit={e => {
                        e.preventDefault();
                        this.props.loginAPIcall(this.props.values.username, this.props.values.password);
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
        auth: state.auth,
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        loginAPIcall: (email, password) => {
            dispatch(AuthActions.loginAPIcall(email, password))
        },
        resetState: () => {
            dispatch(AuthActions.resetState())
        }
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required("You need to enter an username."),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("You need to enter a password."),
    }),
    handleSubmit: (values) => {
        console.log("Login attempt: ", values);
    }
})(Login));