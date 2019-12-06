import React, {Component} from 'react';
import './dashboardNavBar.css'
import UserInfo from "../user/UserInfo";
import {connect} from "react-redux";
import * as DashboardActions from "../../../store/actions/dashboardActions";

class DashboardNavBar extends Component {
    render() {
        return (
            <nav className={"m-dashboard-nav-wrapper"}>
                <div className="m-dashboard-nav-logo-wrapper m-flex-ctr-cnt">
                    <div
                        className="m-dashboard-nav-logo no-select"
                        onClick={() => {
                            this.props.setView()
                        }}
                    >
                        LearningCards
                    </div>
                </div>
                <div className="m-dashboard-nav-links">
                    <ul className="nav flex-column mb-0 m-width-100">
                        <li className="nav-item">
                            <div
                                className="m-dashboard-nav-link m-width-100 no-select"
                                onClick={() => {
                                    this.props.setView()
                                }}
                            >
                                Zestawy
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="m-dashboard-nav-link m-width-100 no-select"
                            >
                                Preferencje
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="m-dashboard-nav-spacer m-flex-ctr-cnt">
                    <div className="m-dashboard-nav-user-wrapper">
                        <UserInfo/>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setView: () => {
            dispatch(DashboardActions.setDashboardUserSetView())
        },
    }
};

export default connect(null, mapDispatchToProps)(DashboardNavBar);
