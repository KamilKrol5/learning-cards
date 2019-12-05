import React, {Component} from 'react';
import './mode1.css';
import Card from "../card/Card";
import {connect} from "react-redux";
import API from "../../../utils/api";
import '../../../style/error.css';

/**
 * Mode1 has to receive setID in property!
 * Mode1 uses Redux to get accessToken from store
 */
class Mode1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            deckSize: 0,
            current: 0,
            error: 'Sets are being loaded...'
        };
        this.loadFromAPI(this.props.setID);
    }

    loadFromAPI = (setID) => {
        API.getSetItems(setID, this.props.auth.accessToken)
            .then(result => this.onItemsLoaded(result))
            .catch(error => this.onLoadError(error))
    };

    onItemsLoaded = (result) => {
        let resultCards = result.data;
        this.setState({
            cards: resultCards,
            deckSize: resultCards.length,
            current: 0,
            error: null,
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

    render() {
        return (
            <div className="m-mode-1">
                <div
                    style={{height: this.state.error && "45px"}}
                    className="m-error-popup"
                >
                    <p className="m-error-popup-p">{this.state.error}</p>
                </div>
                <header className="m-mode-1-header">
                    <h1 className="m-mode-1-header-title">
                        {this.props.setName}
                    </h1>
                </header>
                {
                    this.state.cards != null && this.state.deckSize > 0

                        ?

                        <main className="m-mode-1-main">
                            <div onClick={this.prevElement} className="m-mode-1-main-left">
                                <svg
                                    className="m-mode-1-main-arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </svg>
                            </div>
                            <div className="m-mode-1-main-middle">
                                <div className="m-mode-1-card-wrapper">
                                    <Card
                                        term={this.state.cards[this.state.current].term}
                                        definition={this.state.cards[this.state.current].definition}
                                    />
                                </div>
                            </div>
                            <div onClick={this.nextElement} className="m-mode-1-main-right">
                                <svg
                                    className="m-mode-1-main-arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                </svg>
                            </div>
                        </main>

                        :

                        <main className="m-mode-1-main">
                            <p>No cards found</p>
                        </main>
                }
                {
                    (this.state.cards != null && this.state.deckSize > 0)

                    &&

                    <footer className="m-mode-1-footer">
                        <p className="m-mode-1-footer-ctr">{this.state.current + 1}/{this.state.deckSize}</p>
                    </footer>
                }


            </div>
        );
    }

    nextElement = () => {
        this.setState({
            current: (this.state.current + 1) % this.state.deckSize
        })
    };

    prevElement = () => {
        if (this.state.current !== 0) {
            this.setState({
                current: (this.state.current - 1)
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(Mode1);