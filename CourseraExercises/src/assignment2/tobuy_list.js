import React, { Component } from 'react';
import ToBuyItem from './tobuy_item';

export default class ToBuyList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const emptyMessage = !this.props.items.length ? <div className="emptyMessage">Everything is bought!</div> : null;

        return (
            <div className="col-md-6">
                <h2>To Buy:</h2>
                <ul>{this.props.items.map((item, index) => <ToBuyItem key={item.name} item={item} itemIndex={index} onBuyClick={this.props.onBuyClick} />)}</ul>
                {emptyMessage}
            </div>
        );
    }
}