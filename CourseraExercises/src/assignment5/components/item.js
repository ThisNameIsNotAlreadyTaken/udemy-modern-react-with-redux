import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        const imageUrl = `https://trinat-coursera-angularjs.herokuapp.com/images/${item.short_name}.jpg`;

        return (
            <div className="menu-item-tile col-md-6">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="menu-item-photo">
                            <div>{item.short_name}</div>
                            <img className="img-responsive" width="250" height="150" src={imageUrl} alt={item.name} />
                        </div>
                        <div className="menu-item-price">
                            <div style={{display: 'inline'}}>{` USD${item.price_small} `}</div>
                            <span>{item.small_portion_name}</span> 
                            <div style={{display: 'inline'}}>{` USD${item.price_large} `}</div>
                            <span>{item.large_portion_name}</span>
                        </div>
                    </div>
                    <div className="menu-item-description col-sm-7">
                        <h3 className="menu-item-title">{item.name}</h3>
                        <p className="menu-item-details">{item.description}</p>
                    </div>
                </div>
                <hr className="visible-xs" />
            </div>
        );
    }
}

export default Item;