const products = [
    { name: 'laptop', price: 8000 },
    { name: 'shirt', price: 800 },
    { name: 'watch', price: 4300 },
    { name: 'phone', price: 25000 }
]

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);


/*----------------------------------------
 aktu advance vabe total price add korlam 
 -----------------------------------------*/

const cart = [
    { name: 'laptop', price: 8000, quantity: 1 },
    { name: 'shirt', price: 800, quantity: 4 },
    { name: 'watch', price: 4300, quantity: 3 },
    { name: 'phone', price: 25000, quantity: 1 }
]

let cartTotalPrice = 0;

for (const product of cart) {
    const totalProduct = product.price * product.quantity;
    cartTotalPrice = cartTotalPrice + totalProduct;
}
console.log(cartTotalPrice);






