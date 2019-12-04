import React, {Component} from 'react';
import './card2.css';

class Card extends Component {
    render() {
        return (
            <div className="m-card"
                 style={
                     {
                         width: this.props.width,
                         height: this.props.height,
                     }
                 }
            >
                <div className="m-card-term">
                    <p>{this.props.term}</p>
                </div>
                <div className="m-card-line"/>
                <div className="m-card-definition">
                    <input></input>
                </div>
            </div>
        );
    }
}

export default Card;