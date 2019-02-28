


import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const preLoadedState = {
    products: [],
    reviews: {},
    cart: []
};

const store = createStore(rootReducer, preLoadedState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;