//real world example fetching apis

const API_URL = "https://api.github.com/users/akshaymarch7";

async function handelPromise(){
    const data = await fetch(API_URL);

    const jsonValue = await data.json()

    console.log(jsonValue);
}
handelPromise()