import React, { Component } from 'react';

export default class ToBuyItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (       
            <li>Buy {this.props.item.quantity} {this.props.item.name}
                <button className="btn btn-default" onClick={event => this.props.onBuyClick(this.props.itemIndex)}>
                    <span className="glyphicon glyphicon-ok"></span> Bought
                </button>
            </li>
        );
    }
}