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
            sets: []
        }
    }

    addState(e) {
        e.preventDefault();
        const newSet = {term: null, definition: null};
        this.setState({
            sets: [...this.state.sets, newSet]
        })
    }

    handleDelete = (term) => {
        const newSets=this.state.sets.filter(sets => (sets !== term));
        this.setState({sets:newSets});
    };

    handleChange = (item) => {

        this.setState({
            sets: [...this.state.sets, item]
        });
        // console.log(this.state)
        console.log(item)
    };

    render() {
        return (
            <div className="container">
                <div className="m-title d-flex flex-row mb-4">
                    <h1 className="mt-5">{this.state.id}</h1>
                    <button type="button" className="btn btn-primary btn-lg offset-11 col-sm-1 mb-5 mt-3">Save</button>
                </div>
                <div className="row">
                    {this.state.sets.map(item => (
                        <div className="col-sm-12">
                            <EditCard  height={"100px"} onDelete={this.handleDelete} term={null} definition={null} item={item} onItemChange={this.handleChange}></EditCard>
                            <div className="top-buffer"></div>
                        </div>
                    ))}
                    <div className="col-sm-12">
                        <form onSubmit={(e) => {
                            this.addState(e)
                        }}>
                            <button className="btn btn-primary btn-lg offset-5 col-sm-2 mt-4 mb-5" >ADD</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditSet;