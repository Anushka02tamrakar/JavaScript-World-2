//create an new promise


const promise = new Promise((resolve, reject) => {
    //do something asynchronous
    setTimeout(function () {
        resolve("success");
    }, 2000);
});
//handel the promise
promise.then((value) => {
    //the promise fulfilled
    console.log(value)
}).catch((error) => {
    //promise rejected
    console.log(error)
});







/*In this example, we create a new promise and then start an asynchronous operation. 
The asynchronous operation is a setTimeout() function, which will wait for 2000 milliseconds before executing the callback function.
The callback function resolves the promise with the value "Success!". This means that the operation was successful.
We then handle the promise using the then() and catch() methods. The then() method will be called if the promise is fulfilled, and the catch() method will be called if the promise is rejected.
In this case, the promise is fulfilled, so the then() method is called. The then() method logs the value of the promise to the console.
*/