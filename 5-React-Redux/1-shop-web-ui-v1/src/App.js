import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import CartView from './components/CartView';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';

class App extends Component {


  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">online-shopping</a>
        </nav>
        <hr />
        <CartBadge />
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={ProductList} />
              <Route path="/cart" component={CartView} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
