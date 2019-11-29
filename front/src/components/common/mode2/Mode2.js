import React, {Component} from 'react';
import './mode2.css';
import Card2 from "../card2/Card2";

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
 * Drugi tryb nauki
 * Komponent jest częścią panelu użytkownika
 */
class Mode2 extends Component {

    constructor(props) {
        super(props);

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        shuffle(cards);
        this.state = {
            cards: cards,
            deckSize: cards.length,
            current: 0,
        }
    }

    render() {
        return (
            <div className="m-mode-2">
                <header className="m-mode-2-header">
                    <h1 className="m-mode-2-header-title">
                        {this.props.setName}
                    </h1>
                </header>
                <main className="m-mode-2-main">
                    <div className="m-mode-2-main-middle">
                        <div className="m-mode-2-card-wrapper">
                            <Card2
                                term={this.state.cards[this.state.current].term}
                                definition={this.state.cards[this.state.current].definition}
                            />
                        </div>
                    </div>
                        <button onClick={this.nextElement} className="m-button-answer">Check</button>
                    <button onClick={this.nextElement} className="m-button-skip">Skip</button>
                </main>
                <footer className="m-mode-2-footer">
                    <p className="m-mode-2-footer-ctr">{this.state.current + 1}/{this.state.deckSize}</p>
                </footer>
            </div>
        );
    }

    nextElement = () => {
        this.setState({
            current: (this.state.current + 1) % this.state.deckSize
        })
    };

}

export default Mode2;