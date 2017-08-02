import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CategoriesList from './categories_list';
import ItemsList from './items_list';

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3 col-md-3 sidebar">
                    <CategoriesList match={this.props.match} />
                </div>
                <div className="col-sm-9 col-md-9 main">
                    <Route path={`${this.props.match.url}/:id`} component={ItemsList} />
                </div>
            </div>
        );
    }
}

export default Categories;