//using callback
const cart = ['shoes', 'tshirts', 'kurta']

createOrder(cart, function (orderId) {
    proceedToPayemnt(orderId);
});

//using promises---

const promise = createOrder(cart)

promise.then(function (orderId) {
    proceedToPayemnt(orderId)

})