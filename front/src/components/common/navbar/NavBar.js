import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navbar.css'

/**
 * Główny navbar
 */
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
                    <Link className="m-nav-btn m-nav-link" to="/mode1">Mode 1 (dev)</Link>
                    <Link className="m-nav-btn m-nav-link" to="/mode2">Mode 2 (dev)</Link>
                    <Link className="m-nav-btn m-nav-link" to="/flipcard">FlipCard</Link>
                    <Link className="m-nav-btn m-nav-link" to="/card">Card</Link>
                    <Link className="m-nav-btn m-nav-link" to="/dashboard">Dashboard</Link>
                    <Link className="m-nav-btn m-nav-link" to="/setcard">SetCard</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
