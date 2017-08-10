import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-indicator">
                <img src="https://thisnameisnotalreadytaken.github.io/coursera-angularjs/module5-solution/images/spinner.svg" />
            </div>
        );
    }
}

export default Loader;