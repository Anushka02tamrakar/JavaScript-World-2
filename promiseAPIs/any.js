const p1 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p1 successful")
    },3000);
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p2 successful")
    },5000);
    //setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p3 successful")
    },2000);

})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err) => {
    console.error(err);
});


//wait for first settled success...

//if all three fail - throw aggregate error - it will aggregate all the results and give you aggregate error