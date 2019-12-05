import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './dashboardNavBar.css'

class DashboardNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-md h-100 p-1 m-sidebar">
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse"
                        data-target="#mainmenu"><span className="navbar-toggler-icon float-left"></span></button>
                <div className="collapse navbar-collapse m-sidebar bg-light" id="mainmenu">
                    <Link className="m-nav-logo text-dark nav-link mb-5" to="/">LearningCards</Link>
                    <ul className="nav flex-column bg-white mb-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark font-italic bg-light" to="/">Zestawy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark font-italic bg-light" to="/">Tryb nauki 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark font-italic bg-light" to="/">Tryb nauki 2</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default DashboardNavBar;
