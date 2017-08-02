import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../actions';

import Spinner from './spinner';
import CustomLink from '../../menu/components/custom_link';

class CategoriesList extends Component {
    constructor(props) {
        super(props);
    }

    isDataLoaded() {
        return this.props.categories && this.props.categories.length;
    }

    componentWillMount() {
        if (!this.isDataLoaded()) {
            this.props.getAllCategories();
        }      
    }

    render() {
        if (!this.isDataLoaded()) {
            return (<Spinner />);
        }

        return (
            <div>
	            <ul className="nav nav-sidebar">
                    {_.map(this.props.categories, (category) => {
                        return (
                            <CustomLink to={`${this.props.match.url}/${category.short_name}`} label={category.name} style={{cursor: 'pointer'}} key={category.id} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { categories: state.categories };
}

export default connect(mapStateToProps, { getAllCategories })(CategoriesList);