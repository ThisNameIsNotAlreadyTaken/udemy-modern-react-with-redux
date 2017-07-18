import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Assignment1 from './assignment1/assignment1';

class App extends Component {
    constructor(props) {
        super(props);
  }

    render(){
        return (
           <Assignment1 />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));