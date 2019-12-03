import React, {Component} from 'react';
import NavBarUser from "../../common/navbar/NavBarUser";
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
            <div  id="main-div">
                <div id="navDiv">
                    <NavBarUser></NavBarUser>
                </div>
                <SetsView></SetsView>
            </div>
        );
    }
}

export default Dashboard;