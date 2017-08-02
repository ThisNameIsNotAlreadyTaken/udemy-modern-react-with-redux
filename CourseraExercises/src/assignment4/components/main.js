import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from './menu';
import Start from './start';
import Categories from './categories';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="assignment4">
                <Menu match={this.props.match} />
                <div className="container">
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={() => (<Redirect to={`${this.props.match.url}/welcome`}/>)} />
                        <Route path={`${this.props.match.url}/welcome`} component={() => (<Start match={this.props.match}/>)} />
                        <Route path={`${this.props.match.url}/categories`} component={Categories} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;