import React, {Component} from 'react';
import './pageflexwrapper.css'

class LoginWrapper extends Component {
    render() {
        return (
            <div id="login-page-wrapper" className="m-page-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default LoginWrapper;