import React, {Component} from 'react';
import '../../../style/card.css';
import './checkcard.css';
import '../../../style/button.css';

class CheckCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            color: null,
            mutateStateDone: true,
        };
    }


    render() {
        return (
            <div
                className="m-card"
                style={{
                    backgroundColor: this.state.color
                }}
            >
                <div className="m-card-term-wrapper m-card-part m-flex-ctr-cnt">
                    <p>{this.props.term}</p>
                </div>

                <div className="m-card-input-wrapper m-card-part m-flex-ctr-cnt">
                    <input
                        id="m-check-card-input"
                        type="text"
                        name="definition"
                        placeholder={"answer"}
                        onChange={e => this.updateInputValue(e.target.value)}
                    />
                </div>

                <div className="m-card-line"/>
                <div className="m-card-check-wrapper m-card-part m-flex-ctr-cnt">
                    <div
                        className="m-btn-1-box-sh no-select"
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
        this.props.checkResult(this.unlock, this.props.id, result);
    };

    unlock = () => {
        this.setState({
            mutateStateDone: true,
        })
    };

    checkAnswer = () => {
        if (this.state.mutateStateDone) {
            const self = this;
            this.setState({
                mutateStateDone: false
            }, () => {
                if (this.state.inputValue === this.props.definition) {
                    self.changeColor('#77ff6b');
                    setTimeout(function () {
                        self.changeColor(null);
                        self.sendResult(true);
                    }, 400);
                } else {
                    self.changeColor('#ff444b');
                    setTimeout(function () {
                        self.changeColor(null);
                        self.sendResult(false);
                    }, 400);
                }
            });
        }
    }
}

export default CheckCard;