import React, { Component } from 'react';

export default class BoughtItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>Bought {this.props.item.quantity} {this.props.item.name}</li>        
        );
    }
}