function createProduct(product, callback) {
    const id = Date.now();
    const newProduct = { ...product, id };
    callback(newProduct)
}
function logProduct(product) {
    console.log(product);
};
function logTotalPrice({ price, quantity }) {
    console.log( price * quantity);
    return price * quantity
}

createProduct({ name: 'aple', price: 30, quantity: 3 }, logProduct);
createProduct({ name: 'banana', price: 10, quantity: 2 }, logTotalPrice);
