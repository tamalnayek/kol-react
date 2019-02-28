import React, { Component } from 'react';

import Product from './Product';

import axios from 'axios';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    } 

    componentDidMount() {
        let api = 'http://0.0.0.0:8080/api/products';
        axios
            .get(api)
            .then(response => response.data)
            .then(items => {
                this.setState({ items })
            })
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
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ProductList;