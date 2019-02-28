
console.log("-index.js-");


import store from './store'
import { loadProducts } from './actions/products'
import { buy } from './actions/cart'


// ProductList View
//----------------------------------------------------------
store.subscribe(() => {
    let products = store.getState().products;
    // render....
    console.log("--------ProductListView--------")
    console.log(products);
    console.log("--------ProductListView--------")
});
//----------------------------------------------------------


// App View
//----------------------------------------------------------
store.subscribe(() => {
    let cart = store.getState().cart;
    // render....
    console.log("--------AppView--------")
    console.log(cart);
    console.log("--------AppView--------")
});
//----------------------------------------------------------


setInterval(() => {
    let action = loadProducts('elec', 2)
    store.dispatch(action);
}, 5000);

setInterval(() => {
    let action = buy({}, 1)
    store.dispatch(action);
}, 4000);