import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loader-wrapper">
                <div id="loader"></div>
            </div>
        );
    }
}

export default Spinner;