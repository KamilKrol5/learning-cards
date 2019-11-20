import React, {Component} from 'react';
import NavBarUser from "../../common/navbar/NavBarUser";
import './dashboard.css'
/**
 * Komponent zawierający profil użytkownika
 */
class Dashboard extends Component {
    render() {
        return (
            <div id="main-div">
                <div id="navdiv">
                    <NavBarUser></NavBarUser>
                </div>
                <div  className="flex-column w-100" id="dashDiv">
                    <div className="bg-light w-50 h-25" id="createSet">
                        <p>CREATESET</p>
                    </div>
                    <div className="bg-light w-50" id="reviewSets">
                        <h5 className="text-uppercase text-muted mb-0 card-title">your sets</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;