//returning promise in this case


//creating promise
const promise = new Promise((resolve, reject)=>{
    resolve("Promise resolved value!!")

});

async function getData(){
    return promise;    //return promise 
}
const data = getData()  

data.then((res) => {
    console.log(res);
})