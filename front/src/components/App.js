//dependencies
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
//components
import PageFlexWrapper from "./wrappers/pagewrapper/PageFlexWrapper";
import LoginWrapper from "./wrappers/pagewrapper/LoginWrapper";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import ApiTest from "./pages/ApiTest";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import NavBar from "./common/navbar/NavBar";
import Mode1 from "./common/mode1/Mode1";
import FlipCard from "./common/flipcard/FlipCard";
import Card from "./common/card/Card";
import Mode2 from "./common/mode2/Mode2";
import SetCard from "./common/setCard/SetCard";

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
                        <PageFlexWrapper>
                            <NavBar/>
                            <Home/>
                        </PageFlexWrapper>
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
                        <PageFlexWrapper>
                            <ApiTest/>
                        </PageFlexWrapper>
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
                path="/setcard"
                render={
                    () => (
                        <LoginWrapper>
                            <SetCard title={"setcard"} height={"10%"}></SetCard>
                        </LoginWrapper>
                    )
                }
            />
            <Route
                exact={true}
                path="/profile"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Dashboard/>
                        </PageFlexWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/mode1"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Mode1
                            />
                        </PageFlexWrapper>
                    )
                }
            />
            <Route
                exact={true}
                path="/mode2"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Mode2
                            />
                        </PageFlexWrapper>
                    )
                }
            />

            <Route
                exact={true}
                path="/flipcard"
                render={
                    () => (
                        <PageFlexWrapper>
                            <FlipCard
                                width={"400px"}
                                height={"250px"}
                                term={"term"}
                                definition={"definition"}
                            />
                        </PageFlexWrapper>
                    )
                }
            />


            <Route
                exact={true}
                path="/card"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Card
                                width={"400px"}
                                height={"250px"}
                                term={"term"}
                                definition={"definition"}
                            />
                        </PageFlexWrapper>
                    )
                }
            />
            <Route
                exact={true}
                path="/Dashboard"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Dashboard
                            />
                        </PageFlexWrapper>
                    )
                }
            />

        </BrowserRouter>
    );
}

export default App;
