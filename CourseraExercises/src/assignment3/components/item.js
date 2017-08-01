import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../actions';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem(){
        this.props.deleteItem(this.props.item.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.short_name}</td>
                <td>{this.props.item.description}</td>
                <td>
                    <button className="btn btn-default" onClick={event => this.deleteItem()}>
                        <span className="glyphicon glyphicon-remove text-danger"></span> Don't want this one!
                    </button>
                </td>
			</tr>
        );
    }
}

export default connect(null, { deleteItem })(Item);