//using fetch fun we are making api call to github server so to get user information

//fetching user info to the api


const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API)  //user filled with promise obejct it return promise object

console.log(user)

user.then(function(data){
    console.log(data);
})



//fetch returns here promise

/* state of promise - tells in what stage promise is pending,fullfilled or rejected.
result - whatever the data tha fetch method will returns, result stores this.*/