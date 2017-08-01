import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <span className="navbar-brand">Module 4 solution</span>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to={`${this.props.match.url}/welcome`} activeClassName="active">Home</Link></li>
                            <li><Link to={`${this.props.match.url}/categories`} activeClassName="active">Categories</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;