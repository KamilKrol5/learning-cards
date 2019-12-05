//dependencies
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//components
import PageFlexWrapper from "./wrappers/pagewrapper/PageFlexWrapper";
import LoginWrapper from "./wrappers/pagewrapper/LoginWrapper";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import NavBar from "./common/navbar/NavBar";
import Mode1 from "./common/mode1/Mode1";
import FlipCard from "./common/flipcard/FlipCard";
import Card from "./common/card/Card";
import UserInfo from "./common/user/UserInfo";
import Mode2 from "./common/mode2/Mode2";
import UserSetsView from "./pages/userSetsView/UserSetsView";
import CheckCard from "./common/checkcard/CheckCard";

//other stuff

/**
 * Główny komponent aplikacji
 */
function App() {

    return (

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
                path="/user"
                render={
                    () => (
                        <PageFlexWrapper>
                            <UserInfo/>
                        </PageFlexWrapper>
                    )
                }
            />

            <Route
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
                path="/mode1"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Mode1
                                setID={5}
                                setName={"Moje słówka"}
                            />
                        </PageFlexWrapper>
                    )
                }
            />
            <Route
                path="/mode2"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Mode2
                                setName={"Mode 2 dev"}
                                setID={5}
                            />
                        </PageFlexWrapper>
                    )
                }
            />

            <Route
                path="/checkcard"
                render={
                    () => (
                        <PageFlexWrapper>
                            <CheckCard
                                term={"term"}
                                definition={"definion"}
                                checkResult={(value) => {
                                    console.log(value)
                                }}
                            />
                        </PageFlexWrapper>
                    )
                }
            />

            <Route
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
                path="/dashboard"
                render={
                    () => (
                        <PageFlexWrapper>
                            <Dashboard
                            />
                        </PageFlexWrapper>
                    )
                }
            />


            <Route
                path="/user-sets"
                render={
                    () => (
                        <PageFlexWrapper>
                            <UserSetsView/>
                        </PageFlexWrapper>
                    )
                }
            />

        </BrowserRouter>
    );
}

export default App;
