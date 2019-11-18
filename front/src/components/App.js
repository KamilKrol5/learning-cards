//dependencies
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
//components
import PageWrapper from "./wrappers/pagewrapper/PageWrapper";
import LoginWrapper from "./wrappers/LoginWrapper";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import ApiTest from "./pages/ApiTest";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NavBar from "./common/navbar/NavBar";

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

        </BrowserRouter>
    );
}

export default App;