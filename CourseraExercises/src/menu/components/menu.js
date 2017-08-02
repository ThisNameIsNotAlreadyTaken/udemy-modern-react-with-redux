import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomLink from './custom_link';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Coursera Assignments</a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <CustomLink to="/assignment1" label="Assignment 1"/>
                            <CustomLink to="/assignment2" label="Assignment 2"/>
                            <CustomLink to="/assignment3" label="Assignment 3"/>
                            <CustomLink to="/assignment4" label="Assignment 4"/>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Back</Link></li>
                        </ul>
                    </div>
                {/* /.navbar-collapse */}
                </div>
            {/* /.container-fluid */ }
        </nav>
        );
    }
}

export default Menu;