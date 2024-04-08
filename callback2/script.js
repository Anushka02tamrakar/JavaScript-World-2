/*Drawback of callback----- 
1. Callback hell - 
when we have large pace of code and so many apis, and apis are dependant on another so we fall in callback hell - one callback inside another callback makes this callback hell
and code starts to grow horizontally instead of vertically this code is unreadable and unmaintainable. this structure is also known as *pyramid of doom*
*/

const cart = ["shoes", 'pants', 'kurtas']

api.createOrder(cart, function(){

    api.proceedToPayment(function (){

        api.showOrderSummary(

            function(){
                api.updateWalltet()
            }
        )
    })
})

//creating a ecommerse web, 3apis - create,update,summary and then update.