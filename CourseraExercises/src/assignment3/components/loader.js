import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.show) {
            return (<div className="loader"></div>);
        }
        else {
            return (<noscript/>);
        }
    }
}

export default Loader;