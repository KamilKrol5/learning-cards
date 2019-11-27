import React, {Component} from 'react';
import './mode1.css';
import FlipCard from "../flipcard/FlipCard";

/**
 * Pierwszy tryb gry
 * Komponent jest częścią panelu użytkownika
 */
class Mode1 extends Component {
    render() {
        return (
            <div className="m-mode-1">
                <header className="m-mode-1-header">
                    <h1 className="m-mode-1-header-title">
                        {this.props.setName}
                    </h1>
                </header>
                <main className="m-mode-1-main">
                    <div className="m-mode-1-main-left">
                        <svg
                            className="m-mode-1-main-arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </svg>
                    </div>
                    <div className="m-mode-1-main-middle">
                        <div className="m-mode-1-card-wrapper">
                            <FlipCard
                                term={"term"}
                                definition={"definition"}
                            />
                        </div>
                    </div>
                    <div className="m-mode-1-main-right">
                        <svg
                            className="m-mode-1-main-arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </svg>
                    </div>
                </main>
                <footer className="m-mode-1-footer">

                </footer>
            </div>
        );
    }
}

export default Mode1;