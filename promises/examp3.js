//promise chaining to resolve the callback hell problem

const cart = ["shoes", 'pants', 'kurtas']
//callback hell
api.createOrder(cart, function (orderId) {

    api.proceedToPayment(orderId, function (paymentInfo) {

        api.showOrderSummary(paymentInfo, function () {
            api.updateWalltet()
        }
        )
    })
})

//promise chaining

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)

    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWalltet(paymentInfo)

    });
//arrow func way----
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalltet(paymentInfo));


//Note: we should always return a promise from promise wehen we are chaining it