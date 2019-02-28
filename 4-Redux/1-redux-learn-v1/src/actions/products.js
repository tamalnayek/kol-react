



export function loadProducts(type, size) {
    //...
    const products = [{ name: 'Laptop', id: 111 }, { name: 'Mobile', id: 222 }];
    return { type: 'LOAD_PRODUCTS', products } // sync...
}