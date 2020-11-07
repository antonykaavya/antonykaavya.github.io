import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
// import TechNotes from "./Product/TechNotes";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/Resume" component={Resume} />

                    {/* <Route path="/TechNotes" component={TechNotes} /> */}
                </Switch>
            </Router>
        )
    }
}
