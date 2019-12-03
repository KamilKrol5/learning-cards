import React, {Component} from 'react';
import NavBarUser from "../../common/navbar/NavBarUser";
import './dashboard.css'
import SetCard from "../../common/setCard/SetCard";
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
            <div  id="main-div">
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
                    <div className="bg-light container" id="reviewSets">
                        <h5 className="text-uppercase text-muted mb-0 card-title">List of sets: </h5>
                        <div className="row top-buffer">
                            {this.state.sets.map(item => (
                                <div className="col-sm-6 col-lg-4"> <SetCard height={"100px"} title={item} key={item}></SetCard>
                                <div className="top-buffer"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;