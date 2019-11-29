import React, {Component} from 'react';
import NavBarUser from "../../common/navbar/NavBarUser";
import './dashboard.css'
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
        // const {userSets} = this.state;
        return (
            <div id="main-div">
                <div id="navDiv">
                    <NavBarUser></NavBarUser>
                </div>
                <div  id="dashDiv">
                    <div className="bg-light" id="createSet">

                        <form onSubmit={(e) => {this.addState(e)}}>
                            <p><input ref={(input) => {this.newSet = input}} type="text" /></p>
                            <p><button>AddState</button></p>
                        </form>
                    </div>
                    <div className="bg-light" id="reviewSets">
                        <h5 className="text-uppercase text-muted mb-0 card-title">List of sets: </h5>
                        <ul>
                            {this.state.sets.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;