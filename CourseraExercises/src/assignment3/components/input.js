import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(term){
        this.setState({term: term});
    }

    getItems(){
        this.props.onButtonClick({
            showList: true, 
            isLoading: true
        });
        this.props.getItems(this.state.term, () => {
            this.props.setIsLoading(false);
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" placeholder="search term" className="form-control" value={this.state.term}
                           onChange={ event => this.onInputChange(event.target.value) } />
                </div>
                <div className="form-group narrow-button">
                    <button className="btn btn-primary" onClick={event => this.getItems()}>Narrow It Down For Me!</button>
                </div>
            </div>
        );
    }
}

export default connect(null, { getItems })(Input);