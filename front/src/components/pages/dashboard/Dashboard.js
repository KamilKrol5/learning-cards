import React, {Component} from 'react';
import DashboardNavBar from "../../common/dashboardNavbar/DashboardNavBar";
import './dashboard.css'
import SetCard from "../../common/setCard/SetCard";
import SetsView from "../SetsView/SetsView";
/**
 * Komponent zawierający profil użytkownika
 */
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets:[]
        }
    }

    addState(e){
        e.preventDefault();
        const{sets} = this.state;
        const newSet = this.newSet.value;

        this.setState({
            sets:[...this.state.sets, newSet]
        })
    }

    render() {
        return (
            <div id="main-div">
                <div id="navDiv">
                    <DashboardNavBar></DashboardNavBar>
                </div>
                <SetsView></SetsView>
            </div>
        );
    }
}

export default Dashboard;