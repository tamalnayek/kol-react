


export function productsReducer(state = [], action) {
    console.log("-products-reducer-");
    switch (action.type) {
        case 'LOAD_PRODUCTS': {
            let { products } = action;
            return [...products,...state];
        }
        default: {
            return state;
        }
    }

}