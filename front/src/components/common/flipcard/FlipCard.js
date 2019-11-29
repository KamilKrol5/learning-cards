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
            <div className="m-flip-card"
                 style={
                     {
                         width: this.props.width,
                         height: this.props.height,
                     }
                 }
            >
                <div className="m-flip-card-inner">
                    <div className="m-flip-card-front">
                        <p>{this.props.term}</p>
                    </div>
                    <div className="m-flip-card-back">
                        <p>{this.props.definition}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default FlipCard;