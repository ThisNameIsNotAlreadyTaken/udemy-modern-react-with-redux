import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../actions';

import Spinner from './spinner';

class ItemsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentCategoryAndItems = this.props.items[this.props.match.params.id];

        if (!currentCategoryAndItems) {
            this.props.getItems(this.props.match.params.id);    
            return <Spinner />;
        }

        const category = currentCategoryAndItems.category;
        const items = currentCategoryAndItems.items;

        return (
            <div>
                <h1 className="page-header">{category.name}</h1>
                <span className="text-muted">{category.special_instructions}</span>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.map(items, item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{ item.name}</td>
                                        <td>{ item.price_large }</td>
                                        <td>{ item.description }</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { items: state.items };
}

export default connect(mapStateToProps, { getItems })(ItemsList);