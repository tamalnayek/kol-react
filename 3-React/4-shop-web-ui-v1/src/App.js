import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import classNames from 'classnames'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
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

  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }

  renderBuyBtn(item) {
    if (item.canBuy) return (<button className="btn btn-sm btn-primary">buy</button>)
    else return null;
  }

  renderTabPanel(item) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1: {
        panel = <div>{item.description}</div>
        break;
      }
      case 2: {
        panel = <div>Not Yet</div>
        break;
      }
      case 3: {
        panel = <div>None Yet</div>
        break;
      }
      default: {
        panel = null;
      }
    }
    return panel;
  }

  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.image} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              {this.renderBuyBtn(item)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specification</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">online-shopping</a>
        </nav>
        <hr />
        <hr />

        {this.renderItems()}

      </div>
    );
  }
}

export default App;
