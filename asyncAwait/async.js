//what is async 
//returnining value to the async func


async function getData(){
    return "Namaste"    //wrap promise in the value and return promise 
}
const dataPromise = getData()  

dataPromise.then((res) => {
    console.log(res);
})