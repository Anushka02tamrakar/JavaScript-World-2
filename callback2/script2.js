/*--------Drawback of callback----- 
2. inversion of control - its another problem we see while using callback . its like you loose the control of your code when we use callback.
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

//so to control this we need promises.