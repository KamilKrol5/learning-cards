import React, {Component} from 'react';
import './dashboardNavBar.css'
import {Link} from "react-router-dom";
import UserInfo from "../user/UserInfo";

class DashboardNavBar extends Component {
    render() {
        return (
            <nav className={"m-dashboard-nav-wrapper"}>
                <div className="m-dashboard-nav-logo-wrapper m-flex-ctr-cnt">
                    <Link className="m-dashboard-nav-logo" to={"/"}>LearningCards</Link>
                </div>
                <div className="m-dashboard-nav-links">
                    <ul className="nav flex-column bg-white mb-0 m-width-100">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-dark bg-light text-center m-width-100"
                                to="/"
                            >
                                Zestawy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-dark bg-light text-center m-width-100"
                                to="/"
                            >
                                Preferencje
                            </Link>
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

export default DashboardNavBar;
