import React, {Component} from 'react';
import './home.css';
import {Link} from "react-router-dom";

/**
 * Strona główna aplkacji
 */
class Home extends Component {
    render() {
        return (
            <div id="m-home-page">
                <h1>Fiszki bla bla bla bla bla bla bla bla bla</h1>
                <h1>cholera wie co</h1>
                <h1>bla bla bla</h1>
                <Link className="m-home-page-btn" to={"/signup"}>Begin</Link>
            </div>
        );
    }
}

export default Home;