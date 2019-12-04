import React, {Component} from 'react';
import './mode2.css';
import API from "../../../utils/api";
import {connect} from "react-redux";

/**
 * Drugi tryb nauki
 * Komponent jest częścią panelu użytkownika
 */
class Mode2 extends Component {

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
        resultCards = this.shuffle(resultCards);
        resultCards = resultCards.map((card) => {
            return {
                ...card,
                correct: false,
            }
        });

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
            <div className="m-mode-2">
                <header className="m-mode-2-header">
                    <h1 className="m-mode-2-header-title">
                        {this.props.setName}
                    </h1>
                </header>
                {
                    this.state.cards != null && this.state.deckSize > 0

                        ?

                        <main className="m-mode-2-main">

                        </main>

                        :

                        <main className="m-mode-2-main">
                            <p>No cards found</p>
                        </main>
                }
                {
                    this.state.cards != null && this.state.deckSize > 0

                        &&

                        <footer className="m-mode-2-footer">
                            <p className="m-mode-2-footer-ctr">{this.state.current + 1}/{this.state.deckSize}</p>
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

}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(Mode2);