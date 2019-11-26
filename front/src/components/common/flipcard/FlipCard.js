import React, {Component} from 'react';
import './flipcard.css';

/**
 * Karta z definicję, po najechaniu czary mary obraca się i cyk jest wynik
 * Dostaje jako propsy: definicje i znaczenie
 */
class FlipCard extends Component {

    componentDidMount() {
        // document.g
    }

    render() {
        return (
            // <div className={"kurwa1"}>
            //     <p>{this.props.definition}</p>
            // </div>
            <div
                className="flip-card-wrapper">
                <div className="flip-card"
                     style={
                         {
                             width: this.props.width,
                             height: this.props.height,
                         }
                     }
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p>{this.props.term}</p>
                        </div>
                        <div className="flip-card-back">
                            <p>{this.props.definition}</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FlipCard;