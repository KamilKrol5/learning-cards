//dependencies
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
//components
import PageWrapper from "./wrappers/PageWrapper";
import LoginWrapper from "./wrappers/LoginWrapper";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import ApiTest from "./pages/ApiTest";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import NavBar from "./common/navbar/NavBar";
import Mode1 from "./common/Mode1";
import FlipCard from "./common/flipcard/FlipCard";
import Card from "./common/card/Card";

//other stuff

/**
 * Główny komponent aplikacji
 */
function App() {
    return (

        //Router w zależności od ścieżki na której aktualnie się znajdujemy renderuje odpowiednie komponenty
        <BrowserRouter>
            <Route
                exact={true}
                path="/"
                render={
                    () => (
                        <PageWrapper>
                            <NavBar/>
                            <Home/>
                        </PageWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/login"
                render={
                    () => (
                        <LoginWrapper>
                            <Login/>
                        </LoginWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/apitest"
                render={
                    () => (
                        <PageWrapper>
                            <ApiTest/>
                        </PageWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/signup"
                render={
                    () => (
                        <LoginWrapper>
                            <Register/>
                        </LoginWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/profile"
                render={
                    () => (
                        <PageWrapper>
                            <Dashboard/>
                        </PageWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/mode1"
                render={
                    () => (
                        <PageWrapper>
                            <Mode1/>
                        </PageWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/flipcard"
                render={
                    () => (
                        <PageWrapper>
                            <FlipCard
                                term={"term"}
                                definition={"definition"}
                            />
                        </PageWrapper>
                    )
                }
            />


            <Route
                exact={true}
                path="/card"
                render={
                    () => (
                        <PageWrapper>
                            <Card
                                term={"term"}
                                definition={"definition"}
                            />
                        </PageWrapper>
                    )
                }
            />

        </BrowserRouter>
    );
}

export default App;
