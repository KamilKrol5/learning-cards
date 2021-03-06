import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navbar.css'
import '../../../style/button.css'

/**
 * Główny navbar
 */
class NavBar extends Component {
    render() {
        return (
            <nav className="m-navbar m-flex-ctr-cnt">
                <div className="m-nav-left">
                    <Link className="m-nav-logo m-nav-link" to="/">LearningCards</Link>
                </div>
                <div className="m-nav-right m-flex-ctr-cnt">
                    <Link className="m-btn-2-box-sh m-nav-link" to="/login">Login</Link>
                    <Link className="m-btn-2-box-sh m-nav-link" to="/signup">Register</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
