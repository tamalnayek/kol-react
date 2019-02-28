
import axios from 'axios'


export function loadProducts(type, size) {
    //...
    //const products = [{ name: 'Laptop', id: 111 }, { name: 'Mobile', id: 222 }];
    //return { type: 'LOAD_PRODUCTS', products } // sync...

    return function (dispatch) {
        let api = 'http://localhost:8080/api/products';
        let promise = axios.get(api)
        promise
            .then(response => response.data)
            .then(products => {
                dispatch({ type: 'LOAD_PRODUCTS', products })// async..
            })
    }


}