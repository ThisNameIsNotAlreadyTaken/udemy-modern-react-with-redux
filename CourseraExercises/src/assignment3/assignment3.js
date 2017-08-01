import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import Main from './components/main';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Assignment3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Main />
            </Provider>
        );
    }
}

export default Assignment3;