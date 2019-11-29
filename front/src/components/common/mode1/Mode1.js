import React, {Component} from 'react';
import './mode1.css';
import Card from "../card/Card";

const cards = [
    {
        term: "term1",
        definition: "definition1"
    },
    {
        term: "term2",
        definition: "definition2"
    },
    {
        term: "term3",
        definition: "definition3"
    },
    {
        term: "term4",
        definition: "definition4"
    },
    {
        term: "term5",
        definition: "definition5"
    },
    {
        term: "term6",
        definition: "definition6"
    },
];


/**
 * Pierwszy tryb nauki
 * Komponent jest częścią panelu użytkownika
 */
class Mode1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: cards,
            deckSize: cards.length,
            current: 0,
        }
    }

    render() {
        return (
            <div className="m-mode-1">
                <header className="m-mode-1-header">
                    <h1 className="m-mode-1-header-title">
                        {this.props.setName}
                    </h1>
                </header>
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
                <footer className="m-mode-1-footer">
                    <p className="m-mode-1-footer-ctr">{this.state.current + 1}/{this.state.deckSize}</p>
                </footer>
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

export default Mode1;