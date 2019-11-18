import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div id="home-page">
                <h1>Home page.</h1>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Home;