function xyz(){
    console.log("HTML")
    setTimeout(function(){
        console.log('Javascript')
    }, 3000);
    console.log('CSS')
    return 'hii';
}

console.log(xyz())