import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cards from '../Components/Cards';
import Categories from '../Components/Categories';
import ErrorPage from '../Components/ErrorPage';
import Header from '../Components/Header';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header />
            </Route>

            <Route exact path="/:category">
                <Header />
                <Categories />
            </Route>

            <Route exact path="/:category/:type">
                <Header />
                <Categories />
                <Cards />
            </Route>

            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Routes;