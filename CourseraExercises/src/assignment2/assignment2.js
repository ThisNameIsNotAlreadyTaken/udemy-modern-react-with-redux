import React, { Component } from 'react';

import ToBuyList from './components/tobuy_list';
import BoughtList from './components/bought_list';

class Assignment2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toBuyItems: [
                { name: "cookies", quantity: 10 },
                { name: "bottles of water", quantity: 20 },
                { name: "pies", quantity: 30 },
                { name: "tomatoes", quantity: 40 },
                { name: "chocolates", quantity: 50 },
                { name: "marmelade", quantity: 60 }],
            boughtItems: []    
        };
    }

    onBuyClick(index){  
        const state = this.state;
        
        this.state.boughtItems.push(this.state.toBuyItems.splice(index, 1)[0]);

        this.setState(state);
    }

    render() {
        return (
        <div className="assignment2">
            <h1>Shopping List Check Off</h1>
            <div className="row">
                <ToBuyList items={this.state.toBuyItems} onBuyClick={index => this.onBuyClick(index)}/>
                <BoughtList items={this.state.boughtItems}/>
            </div>
        </div>);
    }
}

export default Assignment2;