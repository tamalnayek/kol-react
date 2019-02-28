

/*

{
    111:[
        {},{}
    ],
    222:[
        {},{}
    ]
}

*/

export function reviewsReducer(state = {}, action) {
    console.log("-reviews-reducer-");
    switch (action.type) {
        case 'LOAD_REVIEWS': {
            let { productId, reviews } = action;
            let newState = { ...state, [productId]: [...reviews] }
            return newState;
        }
        case 'ADD_NEW_REVIEW': {
            let { productId, review } = action;
            let existingReviews = state[productId];
            let newState = { ...state, [productId]: [...existingReviews, review] }
            return newState;
        }
        default: {
            return state;
        }
    }

}