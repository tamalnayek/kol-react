import React, { Component } from 'react';

import Product from './Product';

import store from '../store'

import { loadProducts } from '../actions/products'

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let items = store.getState().products;
            this.setState({ items })
        });

        let action = loadProducts('elec', 10)
        store.dispatch(action);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    renderItems() {
        let { items } = this.state;
        return items.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ProductList;