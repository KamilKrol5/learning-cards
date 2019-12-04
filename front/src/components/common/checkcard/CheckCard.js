import React, {Component} from 'react';
import '../../../style/card.css';
import './checkcard.css';

class CheckCard extends Component {
    render() {
        return (
            <div className="m-card">
                <div className="m-card-term-wrapper m-card-part">
                    <p>{this.props.term}</p>
                </div>

                <div className="m-card-input-wrapper m-card-part">
                    <input id="m-check-card-input" type="text" name="definition" placeholder={"answer"}/>
                </div>

                <div className="m-card-line"/>
                <div className="m-card-check-wrapper m-card-part">
                    <div
                        className="m-card-check-btn"
                        onClick={
                            () => {
                                this.props.checkClick()

                            }
                        }
                    >
                        Check
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckCard;