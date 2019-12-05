import React, {Component} from 'react';
import * as UserIcon from './UserIcon';
import './user.css';
import {connect} from "react-redux";
import * as AuthActions from "../../../store/actions/authActions";

class UserInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLogoutButton: false
        }
    }

    toggleLogOutButton = () => {
        this.setState({
            showLogoutButton: !this.state.showLogoutButton
        })
    };

    render() {


        return (

            <div className="m-user-info-wrapper">

                {
                    this.props.auth.username != null

                    &&

                    <div className="m-user-info">

                        <div className="m-user-info-msg-wrapper">
                            <div
                                className="m-user-info-msg m-flex-ctr-cnt"
                                style={{height: this.state.showLogoutButton && "100%"}}
                            >
                                <div
                                    className="m-user-logout-btn"
                                    onClick={() => {
                                        this.props.logOut();
                                    }}
                                >
                                    Log out
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-user-info-main"
                            onClick={this.toggleLogOutButton}
                        >
                            <div className="m-user-info-icon">
                                {UserIcon.userIcon}
                            </div>
                            <div className="m-user-info-name">
                                <p className="m-user-info-name-p">jozef</p>
                            </div>
                        </div>
                    </div>
                }

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
        logOut: () => {
            dispatch(AuthActions.logOut())
        },
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);