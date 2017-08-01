import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="starter-template">
	            <h1>Welcome!</h1>
	            <p className="lead">You can open the category page 
                    <Link to={`${this.props.match.url}/categories`} activeClassName="active"> here </Link>
                    or through the navigation bar above.</p>
            </div>
        );
    }
}

export default Start;