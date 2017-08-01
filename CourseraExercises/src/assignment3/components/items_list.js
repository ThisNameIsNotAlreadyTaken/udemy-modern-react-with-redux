import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './item';

class ItemsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return (<noscript />);
        }

        if (!this.props.items.length) {
            return (
                <div className="alert alert-danger" role="alert">
                    Nothing found
                </div>
            );
        }

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Short Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(this.props.items, (item) => {
                        return (
                            <Item item={item} key={item.id} />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return { items: state.items };
}

export default connect(mapStateToProps)(ItemsList);