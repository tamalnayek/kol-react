import React, { Component } from 'react';

import store from '../store'


import { buy } from '../actions/cart'

class CartView extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }
    increment(item) {
        store.dispatch(buy(item))
    }
    renderCartItems() {
        let { cart } = this.state;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>cost</td>
                    <td><i onClick={e => this.increment(item)} className="fa fa-plus"></i></td>
                </tr>
            )
        })
    }
    componentDidMount() {
        let cart = store.getState().cart;
        this.setState({ cart })

        this.unsubscribe=store.subscribe(() => {
            this.setState({ cart: store.getState().cart })
        })

    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <div className="card card-default">
                <div className="card-header">Item(s) in cart </div>
                <div className="card-body">
                    <table className="table table-sm table-bordered">
                        <tbody>
                            {this.renderCartItems()}
                        </tbody>
                        <tfoot>
                            <tr><td>Total: {0}</td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartView;