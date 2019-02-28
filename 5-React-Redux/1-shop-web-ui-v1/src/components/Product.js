import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';

import store from '../store'

import { loadReviews } from '../actions/reviews'
import { buy } from '../actions/cart'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let { value: item } = this.props;
            let reviews = store.getState().reviews[item.id] || [];
            this.setState({ reviews })
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: item } = this.props;
                let { id } = item;
                let action = loadReviews(id);
                store.dispatch(action);
            }
        })
    }

    handleBuy() {
        let { value: item } = this.props;
        let action = buy(item, 1);
        store.dispatch(action);
    }

    renderBuyBtn(item) {
        if (item.canBuy) return (<button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>)
        else return null;
    }

    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
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
                panel = <div>{this.renderReviews()}</div>
                break;
            }
            default: {
                panel = null;
            }
        }
        return panel;
    }


    render() {
        let { value: item } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
        );
    }
}

export default Product;