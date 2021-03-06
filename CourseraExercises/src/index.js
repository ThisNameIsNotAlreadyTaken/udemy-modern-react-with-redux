import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Menu from './menu/components/menu';
import Assignment1 from './assignment1/assignment1';
import Assignment2 from './assignment2/assignment2';
import Assignment3 from './assignment3/assignment3';
import Assignment4 from './assignment4/assignment4';
import Assignment5 from './assignment5/assignment5';

ReactDOM.render(
    <BrowserRouter basename="/udemy-react">
        <div>
            <Menu />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={() => (<Redirect to="/assignment1" />)} />
                    <Route path="/assignment1" component={Assignment1} />
                    <Route path="/assignment2" component={Assignment2} />
                    <Route path="/assignment3" component={Assignment3} />
                    <Route path="/assignment4" component={Assignment4} />
                    <Route path="/assignment5" component={Assignment5} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
  , document.querySelector("#rootDiv"));