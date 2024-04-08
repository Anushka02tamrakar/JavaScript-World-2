const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promise resolvesd value")
    }, 10000);
    
});
const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promise resolvesd value")
    }, 5000);
    
});
//using aysnc await - 
//await can only be used inside an async function
async function handelPromise(){
    console.log("Hello world")

    const val1 = await p1; 
    console.log("Namaste JS");
    console.log(val1)

    const val2 = await p2; 
    console.log("Namaste JS");
    console.log(val2)
}
handelPromise();

//normal promise   - in this js waits for non it quickly print namaste js then after 10s it prints p1
function getData(){
    p1.then((res)=>{
        console.log("Namaste JS")
    })
}