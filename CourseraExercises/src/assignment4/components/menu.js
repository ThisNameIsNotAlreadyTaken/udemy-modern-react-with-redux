import React, { Component } from 'react';
import CustomLink from '../../menu/components/custom_link';

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
                            <CustomLink to={`${this.props.match.url}/welcome`} label="Home"/>
                            <CustomLink to={`${this.props.match.url}/categories`} label="Categories"/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;