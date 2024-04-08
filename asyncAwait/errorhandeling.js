//error handeling in async an await using try catch best practice

const API_URL = "https://api.github.com/users/akshaymarch";

async function handelPromise(){
    try{
        const data = await fetch(API_URL)
        const jsonValue = await data.json();
        console.log(jsonValue)
    } catch(err){
        console.log(err);

    }
}
handelPromise();

// traditional way
// handelPromise().catch((err)=> console.log(err));