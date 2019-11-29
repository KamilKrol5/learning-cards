import React, {Component} from 'react';
import './card.css';

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
                    <p>{this.props.definition}</p>
                </div>
            </div>
        );
    }
}

export default Card;