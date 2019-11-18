import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navbar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="m-navbar">
                <div className="m-nav-left">
                    <Link className="m-nav-logo m-nav-link" to="/">LearningCards</Link>
                </div>
                <div className="m-nav-right">
                    <Link className="m-nav-btn m-nav-link" to="/login">Login</Link>
                    <Link className="m-nav-btn m-nav-link" to="/signup">Register</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
