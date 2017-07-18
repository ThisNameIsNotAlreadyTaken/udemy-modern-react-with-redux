import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Assignment1 from './assignment1/assignment1';
import Assignment2 from './assignment2/assignment2';

class App extends Component {
    constructor(props) {
        super(props);
  }

    render(){
        return (
           <Assignment2 />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));