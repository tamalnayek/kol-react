import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }


  renderItems() {
    let { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product value={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
        </div>
      )
    })
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">online-shopping</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
