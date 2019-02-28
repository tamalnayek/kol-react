import React, { Component } from 'react';

import Product from './Product';

import { connect } from 'react-redux';

import { loadProducts } from '../actions/products'

class ProductList extends Component {


    componentDidMount() {
        let { loadProducts } = this.props;
        loadProducts('elec', 10)
    }

    renderItems() {
        let { items } = this.props;
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

function mapStateToProps(state) {
    return {
        items: state.products
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (type, size) => dispatch(loadProducts(type, size))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);