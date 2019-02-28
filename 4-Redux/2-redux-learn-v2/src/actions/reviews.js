
import axios from 'axios'

export function loadReviews(productId, size) {
    //..
    // let reviews = [{}, {}];
    // return { type: 'LOAD_REVIEWS', productId, reviews }


    return function (dispatch) {
        let api = 'http://localhost:8080/api/products/' + productId + "/reviews";
        let promise = axios.get(api)
        promise
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS', productId, reviews })// async..
            })
    }
}

export function addNewReview(productId, review) {
    //..
    // return { type: 'ADD_NEW_REVIEW', productId, review }

    return function (dispatch) {
        let api = 'http://localhost:8080/api/products/' + productId + "/reviews";
        let promise = axios.get(api)
        promise
            .then(response => response.data)
            .then(review => {
                dispatch({ type: 'ADD_NEW_REVIEW', productId, review })// async..
            })
    }

}