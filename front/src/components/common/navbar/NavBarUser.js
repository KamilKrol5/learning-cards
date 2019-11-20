import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navbaruser.css'

class NavBarUser extends Component {
    render() {
        return (
                <div className="container-fluid bg-light h-100 p-1" id="sidebar">
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
        );
    }
}

export default NavBarUser;
