//promise has two important part 1. consuming 2. creating
//create order api 
const cart = ["tshirt", "jeans", "kurta"]
//consuming 
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        //proceedToPayment(orderId)
    })
    .catch(function (err) {
        console.log(err.message)
    })
    
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })
    


//creating

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validate
        //orderId
        if (!validateCart(cart)) {
            const err = new Error('cart is not valid')
            reject(err)
        }
        //logic for craeteOrder
        const orderId = '123345'
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 5000);

        }
    });

    return pr
}
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("payement successful")
    })
}
function validateCart(cart) {
    return false; //for promise fullfilled
    //return false ;//for reject
}


