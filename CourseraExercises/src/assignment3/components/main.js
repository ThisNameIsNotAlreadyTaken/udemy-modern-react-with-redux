import React, { Component } from 'react';

import Input from './input';
import Loader from './loader';
import ItemsList from './items_list';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { showList: false, isLoading: false };
    }

    setShowList(value) {
        this.setState({ showList: value });
    }

    setIsLoading(value) {
        this.setState({ isLoading: value });
    }

    onButtonClick(state){
        this.setState(state);
    }

    render() {
        return (
            <div className="assignment3">
                <h1>Narrow Down Your Chinese Menu Choice</h1>
                <Input onButtonClick={state => this.onButtonClick(state)} setIsLoading={value=> this.setIsLoading(value)} />
                <Loader show={this.state.isLoading}/>
                <div className="clearfix"></div>
                <ItemsList show={this.state.showList}/>
            </div>
        );
    }
}

export default Main;