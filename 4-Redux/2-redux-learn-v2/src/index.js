
console.log("-index.js-");


import store from './store'
import { loadProducts } from './actions/products'
import { loadReviews, addNewReview } from './actions/reviews'
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


setTimeout(() => {
    let action = loadProducts('elec', 2)
    store.dispatch(action);
}, 2000);


setTimeout(() => {
    let action = loadReviews('5bd11f749d48e60f57f7182a')
    store.dispatch(action);
}, 3000);

