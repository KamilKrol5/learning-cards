import React, {Component} from 'react';
import './mode2.css';

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

        this.state = {
            cards: cards,
            deckSize: cards.length,
            current: 0,
        }
    }

    render() {
        return (
            <div className="m-mode-2">
            {/*    TODO     */}
            </div>
        );
    }
}

export default Mode2;