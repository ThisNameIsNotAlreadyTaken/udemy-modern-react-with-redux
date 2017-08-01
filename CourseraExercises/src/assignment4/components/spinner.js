import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.show) {
            return (
                <div className="loader-wrapper">
                    <div id="loader"></div>
                </div>
            );
        }
        else {
            return (<noscript/>);
        }
    }
}

export default Spinner;