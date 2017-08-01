import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <li><Link to="/assignment1" activeClassName="active">Assignment 1</Link></li>
                            <li><Link to="/assignment2" activeClassName="active">Assignment 2</Link></li>
                            <li><Link to="/assignment3" activeClassName="active">Assignment 3</Link></li>
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