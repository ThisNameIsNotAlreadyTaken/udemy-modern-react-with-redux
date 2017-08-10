import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Item from './item';

class MyInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userinfo = this.props.userinfo;

        if (!_.keys(userinfo).length) {
            return (
                <h1 className="text-center">Not Signed Up Yet. <Link to={`${this.props.match.url}/signup`}>Sign up Now!</Link></h1>
            );
        }

        return (
            <div>
                <div className="col-md-offset-1 col-md-8 col-lg-offset-2 col-lg-6">
                    <div>
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h1>{ userinfo.firstName } { userinfo.lastName }</h1>
                                <p><strong>Email: </strong> { userinfo.email } </p>
                                <p><strong>Phone: </strong> { userinfo.phone } </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 divider text-center col-md-offset-2">
                    <Item item={userinfo.favoriteItem} />
                </div>
            </div>    
        );
    }
}

function mapStateToProps(state){
    return { userinfo: state.userinfo };
}

export default connect(mapStateToProps)(MyInfo);