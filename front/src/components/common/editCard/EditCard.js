import React, {Component} from 'react';
import './editcard.css';

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term:this.props.term,
            definition:this.props.definition
        }
    }

    handleChange = (e) => {
        e.preventDefault();
            this.setState({
                [e.target.name]:e.target.value
            })
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
                        <input onChange={this.handleChange} className="col-sm-4 m-input offset-1" type="text" name="term" placeholder="Term" value={this.props.term} />
                        <input onChange={this.handleChange} className="col-sm-4 m-input offset-2" type="text" name="definition" placeholder="Definition" value={this.props.definition} />
                    </form>
                </div>
                <button type="button" className="close m-button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default EditCard;