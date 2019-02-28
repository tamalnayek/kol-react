import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import CartView from './components/CartView';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
  } 

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }



  renderCart() {
    let { cart } = this.state;
    return <CartView cart={cart} />
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

        <Router>
          <div>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cart">Cart</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orders">Orders</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={ProductList} />
              <Route path="/cart" render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
