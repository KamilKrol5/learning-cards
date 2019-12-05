import React, {Component} from 'react';
import './home.css';
import {Link} from "react-router-dom";
import '../../../style/button.css'

/**
 * Strona główna aplkacji
 */
class Home extends Component {
    render() {
        return (
            <div id="m-home-page">
                <h1>Learn with LearningCards</h1>
                <h1>Build your sets</h1>
                {/*<h1>and learn xD</h1>*/}
                <Link className="m-home-page-btn m-btn-2-box-sh" to={"/signup"}>Begin</Link>
            </div>
        );
    }
}

export default Home;