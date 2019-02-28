


import rootReducer from '../reducers';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


const preLoadedState = {
    products: [
        { id: 1, name: 'sample-item' }
    ],
    reviews: {},
    cart: []
};

const store = createStore(rootReducer, preLoadedState, composeWithDevTools(
));

export default store;