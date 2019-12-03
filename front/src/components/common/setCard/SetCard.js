import React, {Component} from 'react';
import './setcard.css';

class SetCard extends Component {
    render() {
        return (
            <div className="m-card"
                 style={
                     {
                         title: this.props.title,
                         height:this.props.height
                     }
                 }
            >
                <div className="m-card-term">
                    <p>{this.props.title}</p>
                    <button onClick={this.nextElement} className="m-button-edit">Edit</button>
                    <button type="button" className="close m-button" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="m-card-line"/>
                <div className="m-card-definition">
                </div>
            </div>
        );
    }
}

export default SetCard;