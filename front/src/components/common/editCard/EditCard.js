import React, {Component} from 'react';
import './editcard.css';

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: this.props.term,
            definition: this.props.definition
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.onItemChange(this.state);
    };


    render() {
        return (
            <div className="m-card"
                 style={
                     {
                         height: this.props.height
                     }
                 }
            >
                <div className="w-100 h-100 d-block">
                    <form className="container m-form">
                        <input onChange={this.handleChange} className="col-sm-4 m-input offset-1" type="text"
                               name="term" placeholder="Term" defaultValue={this.props.term}/>
                        <input onChange={this.handleChange} className="col-sm-4 m-input offset-2" type="text"
                               name="definition" placeholder="Definition" defaultValue={this.props.definition}/>
                    </form>
                </div>
                <button type="button" className="close m-button" aria-label="Close" onClick={() => this.props.onDelete(this.state)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default EditCard;