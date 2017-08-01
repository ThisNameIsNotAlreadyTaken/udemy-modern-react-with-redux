import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './menu';
import Spinner from './spinner';
import Start from './start';
import CategoriesList from './categories_list';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="assignment4">
                <Spinner show={ false }/>
                <Menu match={this.props.match} />
                <div className="container">
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={() => (<Start match={this.props.match}/>)} />
                        <Route path={`${this.props.match.url}/welcome`} component={() => (<Start match={this.props.match}/>)} />
                        <Route path={`${this.props.match.url}/categories`} component={CategoriesList} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;