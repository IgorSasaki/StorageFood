import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import ListFood from './Pages/ListFood';
import RegisterFood from './Pages/NewFood';

export default class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ListFood} />
                    <Route path="registerFood" component={RegisterFood} />
                </Switch>
            </BrowserRouter>
        )
    }
}