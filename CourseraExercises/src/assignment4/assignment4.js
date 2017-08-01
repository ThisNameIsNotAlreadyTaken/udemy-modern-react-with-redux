import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Main from './components/main';

class Assignment4 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Main match={this.props.match}/>
            </Provider>
        );
    }
}

export default Assignment4;