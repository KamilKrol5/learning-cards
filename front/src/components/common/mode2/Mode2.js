import React, {Component} from 'react';
import './mode2.css';
import API from "../../../utils/api";
import {connect} from "react-redux";
import CheckCard from "../checkcard/CheckCard";
import '../../../style/button.css'

/**
 * Mode2 has to receive setID in property!!!
 * Mode2 uses Redux to get accessToken from store
 */
class Mode2 extends Component {

    thumbsUp = <svg className="m-mode-2-footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>;
    thumbsDown = <svg className="m-mode-2-footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>;
    thumbsUpAndDown = <svg className="m-mode-2-footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.resetState()
    }

    resetState = () => {
        this.setState({
            cards: [],
            deckSize: 0,
            current: 0,
            error: 'Sets are being loaded...',
            correct: 0,
            wrong: 0,
            finish: false,
            mutateStateDone: true,
        });
        this.loadFromAPI(this.props.setID);
    };

    loadFromAPI = (setID) => {
        API.getSetItems(setID, this.props.auth.accessToken)
            .then(result => this.onItemsLoaded(result))
            .catch(error => this.onLoadError(error))
    };

    onItemsLoaded = (result) => {
        let resultCards = result.data;
        //uncomment to shuffle :)
        // resultCards = this.shuffle(resultCards);
        resultCards = resultCards.map((card) => {
            return {
                ...card,
                correct: null,
            }
        });

        this.setState({
            cards: resultCards,
            deckSize: resultCards.length,
            current: 0,
            error: null,
            correct: 0,
            wrong: 0,
            finish: false,
            mutateStateDone: true,
        });
    };

    onLoadError = (error) => {
        this.setState({
            cards: [],
            deckSize: 0,
            current: 0,
            error: 'Error occurred while loading set.'
        });
        console.log(error)
    };

    shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    render() {
        return (
            <div className="m-mode-2 m-flex-ctr-cnt">
                <div
                    style={{height: this.state.error && "45px"}}
                    className="m-error-popup"
                >
                    <p className="m-error-popup-p">{this.state.error}</p>
                </div>
                <header className="m-mode-2-header m-flex-ctr-cnt">
                    <h1 className="m-mode-2-header-title">
                        {this.props.setName}
                    </h1>
                </header>

                {
                    this.state.cards != null &&
                    this.state.deckSize > 0

                        ?

                        <main className="m-mode-2-main m-flex-ctr-cnt">
                            <div className="m-mode-2-card-wrapper m-flex-ctr-cnt">
                                {
                                    this.state.finish

                                        ?
                                        <div className="m-mod-2-middle-finish-wrapper m-flex-ctr-cnt">
                                            <div className="m-mod-2-middle-finish-txt">
                                                Won!
                                            </div>
                                            <div
                                                className="m-mod-2-middle-finish-btn m-btn-1-box-sh"
                                                onClick={() => {
                                                    this.resetState();
                                                }}
                                            >
                                                Try again m8
                                            </div>
                                        </div>


                                        :

                                        <CheckCard
                                            mutateStateDone={this.state.mutateStateDone}
                                            id={this.state.current}
                                            term={this.state.cards[this.state.current].term}
                                            definition={this.state.cards[this.state.current].definition}
                                            checkResult={(callback, id, result) => {
                                                this.handleResult(callback, id, result)
                                            }}
                                        />
                                }
                            </div>
                        </main>

                        :

                        <main className="m-mode-2-main">
                            <p>No cards found</p>
                        </main>
                }
                {
                    this.state.cards != null && this.state.deckSize > 0

                    &&

                    <footer className="m-mode-2-footer m-flex-ctr-cnt">
                        <p className="m-mode-2-footer-ctr">
                            <span>
                                {this.thumbsUp}
                            </span>
                            {this.state.correct + " "}
                            <span>
                                {this.thumbsDown}
                            </span>
                            {this.state.wrong + " "}
                            <span>
                                {this.thumbsUpAndDown}
                            </span>
                            {this.state.deckSize + " "}
                        </p>
                    </footer>
                }

            </div>
        );
    }

    checkIfFinish = () => {
        return new Promise((resolve) => {
            this.setState({
                finish: this.state.correct === this.state.deckSize,
            }, resolve);
        });
    };

    updateCard = (id, result) => {
        return new Promise((resolve) => {
            let cardsNew = this.state.cards;
            cardsNew[id].correct = result;
            this.setState({
                cards: cardsNew,
            }, resolve);
        });
    };

    updateState = (prevCorrect, id, result) => {
        return new Promise((resolve) => {
                if (prevCorrect === false) {
                    if (result) {
                        this.setState({
                            correct: this.state.correct + 1,
                            wrong: this.state.wrong - 1,
                        }, resolve)
                    } else {
                        resolve()
                    }
                } else {
                    if (result) {
                        this.setState({
                            correct: this.state.correct + 1,
                        }, resolve)
                    } else {

                        this.setState({
                            wrong: this.state.wrong + 1,
                        }, resolve)
                    }
                }
            }
        )
    };

    updateCurrent = (current) => {
        return new Promise((resolve) => {
                let newCurrent;
                for (let i = 0; i < this.state.deckSize; i++) {
                    newCurrent = (current + 1 + i) % this.state.deckSize;
                    if (!this.state.cards[newCurrent].correct) {
                        break;
                    }
                }
                this.setState({
                    current: newCurrent,
                }, resolve)
            }
        )
    };

    handleResult = (cardCallback, id, result) => {
        const prevCorrect = this.state.cards[id].correct;
        this.updateCard(id, result)
            .then(this.updateState(prevCorrect, id, result))
            .then(this.checkIfFinish())
            .then(this.updateCurrent(id))
            .then(() => {
                if (!this.state.finish) cardCallback();
            })
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(Mode2);