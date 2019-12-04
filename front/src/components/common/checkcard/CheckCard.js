import React, {Component} from 'react';
import '../../../style/card.css';
import './checkcard.css';

class CheckCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            color: null,
        }
    }

    render() {
        return (
            <div
                className="m-card"
                style={{
                    backgroundColor: this.state.color
                }}
            >
                <div className="m-card-term-wrapper m-card-part">
                    <p>{this.props.term}</p>
                </div>

                <div className="m-card-input-wrapper m-card-part">
                    <input
                        id="m-check-card-input"
                        type="text"
                        name="definition"
                        placeholder={"answer"}
                        onChange={e => this.updateInputValue(e.target.value)}
                    />
                </div>

                <div className="m-card-line"/>
                <div className="m-card-check-wrapper m-card-part">
                    <div
                        className="m-card-check-btn no-select"
                        onClick={this.checkAnswer}
                    >
                        Check
                    </div>
                </div>
            </div>
        );
    }

    updateInputValue = (value) => {
        this.setState({
            inputValue: value,
        })
    };

    changeColor = (color) => {
        this.setState({
            color,
        })
    };

    sendResult = (result) => {
        this.props.checkResult(result);
    };


    checkAnswer = () => {
        const self = this;

        if (this.state.inputValue === this.props.definition) {
            self.changeColor('#77ff6b');
            setTimeout(function() {
                self.changeColor(null);
                self.sendResult(true);
            }, 400);
        } else {
            self.changeColor('#ff444b');
            setTimeout(function() {
                self.changeColor(null);
                self.sendResult(false);
            }, 400);
        }
    }
}

export default CheckCard;