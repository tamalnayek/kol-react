import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems() {
        let { cart } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>cost</td>
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
                            Total: {0}
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartView;