
import React from 'react'
// BrowserRouter HashRouter
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from './routes'
import Layout from "components/Layout"
import './App.css';

function App () {
    return (
        <Router>
            <Switch>
                <Layout>
                    {Routes.map((route, index) =>
                        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                    )}
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;