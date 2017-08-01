import React, { Component } from 'react';
import BoughtItem from './bought_item';

export default class BoughtList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const emptyMessage = !this.props.items.length ? <div className="emptyMessage">Nothing bought yet.</div> : null;

        return (
            <div className="col-md-6">
                <h2>Already Bought:</h2>
                <ul>{this.props.items.map((item) => <BoughtItem key={item.name} item={item} />)}</ul>
                {emptyMessage}
            </div>
        );
    }
}