import React, {Component} from 'react';
import './editset.css'
import SetCard from "../../common/setCard/SetCard";
import EditCard from "../../common/editCard/EditCard";

/**
 * Komponent zawierający profil użytkownika
 */
class EditSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            sets: []
        }
    }

    addState(e) {
        e.preventDefault();
        const {sets} = this.state;
        const newSet = {term: null, definition: null};

        this.setState({
            sets: [...this.state.sets, newSet]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row top-buffer">
                    {this.state.sets.map(item => (
                        <div className="col-sm-12"><EditCard height={"100px"} term={"hehe"} definition={"xd"} key={item}></EditCard>
                            <div className="top-buffer"></div>
                        </div>
                    ))}
                    <div className="col-sm-12">
                        <form onSubmit={(e) => {
                            this.addState(e)
                        }}>
                            <button>AddState</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditSet;