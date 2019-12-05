import React, {Component} from 'react';
import './editset.css'
import SetCard from "../../common/setCard/SetCard";
import EditCard from "../../common/editCard/EditCard";
import update from 'react-addons-update'; // ES6

/**
 * Komponent zawierający profil użytkownika
 */
class EditSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            number:this.props.number,
            sets: []
        }
    }

    addState(e) {
        e.preventDefault();
        let i=this.state.number;
        const newSet = {id:i+1,term: null, definition: null};
        this.setState({
            sets: [...this.state.sets, newSet],
            number:i+1
        }, function () {
        }
            )
    }

    handleDelete = (itemID) => {
        console.log(itemID);
        const newSets=this.state.sets.filter(sets => (sets.id !== itemID));
        this.setState({sets:newSets},function () {
            console.log(this.state.sets)
        });
    };

    handleChange = (item,k) => {
        let newArr = this.state.sets;
        let i = newArr.findIndex(x => x.id === k);
        newArr[i] = item;
        this.setState({
            sets: newArr
        },function () {
            console.log(this.state.sets);
        });
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
                            <EditCard  height={"100px"} onDelete={this.handleDelete} key={item.id} term={item.term} number={item.id} definition={item.definition} onItemChange={this.handleChange}></EditCard>
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