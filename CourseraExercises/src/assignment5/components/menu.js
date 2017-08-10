import React, { Component } from 'react';
import CustomLink from '../../menu/components/custom_link';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <span className="navbar-brand">Module 5 solution</span>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <CustomLink to={`${this.props.match.url}/start`} label="Home"/>
                            <CustomLink to={`${this.props.match.url}/myinfo`} label="My Info"/>
                            <CustomLink to={`${this.props.match.url}/signup`} label="Sign Up"/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;