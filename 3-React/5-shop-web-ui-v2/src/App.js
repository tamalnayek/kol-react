import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Product from './components/Product';
import CartView from './components/CartView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      cart: [],
      items: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          canBuy: true,
          image: 'images/Laptop.png',
          description: 'New Mac pro'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000,
          canBuy: true,
          image: 'images/Mobile.png',
          description: 'New  pro'
        },

      ]
    }
  }

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }


  renderItems() {
    let { items, isCartOpen } = this.state;
    if (!isCartOpen) {
      return items.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product value={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
          </div>
        )
      })
    }
  }

  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen) {
      return <CartView cart={cart} />
    }
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">online-shopping</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/" onClick={e => this.toggleCart(e)}>{isCartOpen ? 'View products' : 'View cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderItems()}
        {this.renderCart()}
      </div>
    );
  }
}

export default App;
