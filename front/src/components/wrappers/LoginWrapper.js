import React, {Component} from 'react';

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