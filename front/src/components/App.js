//dependencies
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//components
import PageWrapper from "./wrappers/PageWrapper";
import LoginWrapper from "./wrappers/LoginWrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";

//other stuff

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
                        <Home />
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
                        <Login />
                    </LoginWrapper>
                )
            }
        />

    </BrowserRouter>
  );
}

export default App;
