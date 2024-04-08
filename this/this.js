//"use strict"

// #this in global space

console.log(this);  //globalObject - window, global

// #this inside a function

function x(){
    //the value depends on strict mode and non strict mode 
    console.log(this)
}

// #this inside  non-strict mode - (this substitution)

//if the value of this keyword is undefined or null
//this keyword will be replaced with global object
//only in non strict mode

//this keyword value depends on how the function is called
x();          //undefined
windown.x()   //window


// #this inside a object's method


const student1 = {
    name : "Akshay" ,
    printName: function(){
        console.log(this.name)
    },
};
student1.printName();
const student2 = {
    name : "Anushka" ,
};

student1.printName.call(student2)  //value of this = student2


// #this inside arrow function

const obj = {
    a : 10,
    x: function(){
        console.log(this)
    },
};
obj.x();         //obj object
//what if its arrow func
const obj1 = {
    a : 10,
    x: ()=>{
        console.log(this)   //in this case this keyword doesnt behave like its inside function instead it behave like it is in global space, this value will be - (enclosing lexical context) - means how it is wrriten inside code
    },
};
obj.x()    //value will be window oobject, will take the value of global space.

// #this inside nested arrow function

const obj2 = {
    a: 10,
    x: function(){
        //console.log(this)    // just like this 
        //enclosing lexical context
        const y = ()=>{
            console.log(this);  //this working as arow function not their and it is inside enclosing lexical context 
        };
        y();
    },
}
obj2.x();
//arow function dont provide this binding - retains value of the lexical context 

// #this inside DOM => it will refer to the particular HTML DOM element



