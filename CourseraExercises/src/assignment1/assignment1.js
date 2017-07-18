import React, { Component } from 'react';

class Assignment1 extends Component {
    constructor(props) {
        super(props);

        this.state = { items: '', message: '', success: false, touched: false };
    }

    checkItems(){
        let itemsArray = (this.state.items || "").split(',').filter((i) => { return i; });

        this.setState({
            success: !!itemsArray.length,
            message: !itemsArray.length ? "Please enter data first" : itemsArray.length > 3 ? "Too much!" : "Enjoy!",
            touched: true
        })
    }

    onTouched(){
        this.setState({touched: true});
    }

    onInputChange(items){
        this.setState({items: items});
    }

    render() {
        const cssResult = this.state.touched && this.state.success ? 'success' : this.state.touched && !this.state.success ? 'error' : '';
        const inputClass = `form-group ${(cssResult === 'success' ? 'has-success' : cssResult === 'error' ? 'has-error' : '')}`;
        const messageClass = `form-group message ${(cssResult === 'success' ? 'text-success' : cssResult === 'error' ? 'text-danger' : '')}`;

        return (
            <div className="assignment1">
                <h1>Lunch Checker</h1>
                <div className={inputClass}>
                    <input id="lunch-menu" type="text" placeholder="list comma separated dishes you usually have for lunch" className="form-control" 
                        value={this.state.items} onBlur={event => this.onTouched()} onChange={ event => this.onInputChange(event.target.value) } />
                </div>
                <h4>Empty items aren't considered</h4>
                <div className="form-group">
                    <button className="btn btn-default" onClick={event => this.checkItems()}>Check If Too Much</button>
                </div>
                <div className={messageClass}>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

export default Assignment1;