import React, { Component } from 'react';

import store from '../store'
import { connect } from 'react-redux';


import { buy } from '../actions/cart'

class CartView extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }

    renderCartItems() {
        let { cart, buy } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>cost</td>
                    <td><i onClick={e => buy(item)} className="fa fa-plus"></i></td>
                </tr>
            )
        })
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


function mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        buy: (item, qty) => dispatch(buy(item, qty))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartView);