import React, { Component } from 'react';

import store from '../store'


class CartBadge extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ count: cart.length })
        })
    }
    render() {
        return (
            <div>
                <i className="fa fa-shopping-cart"></i> &nbsp;
                <span className="badge badge-danger">{this.state.count}</span> item(s) in cart
            </div>
        );
    }
}

export default CartBadge;