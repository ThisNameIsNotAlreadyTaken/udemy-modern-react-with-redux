import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from './menu';
import Start from './start';
import MyInfo from './myinfo';
import SignUp from './signup';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="assignment5">
                <Menu match={this.props.match} />
                <div className="container">
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={() => (<Redirect to={`${this.props.match.url}/start`}/>)} />
                        <Route path={`${this.props.match.url}/start`} component={Start} />
                        <Route path={`${this.props.match.url}/myinfo`} component={() => (<MyInfo match={this.props.match}/>)} />
                        <Route path={`${this.props.match.url}/signup`} component={() => (<SignUp match={this.props.match}/>)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;