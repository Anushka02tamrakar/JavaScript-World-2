const p1 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p1 successful")
    },3000);
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p2 successful")
    },1000);
    //setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("p3 successful")
    },2000);
})

Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err) => {
    console.error(err);
});


//race - the first settled promise whatever the result pass or fail it will return.