/**
 Datatype is of two category 
1. Premitive : Call by value
    a. String 
    b. Number
    c. Boolean
    d. Null
    e. Undefined 
    f.Symbol
    g. BigInt
*/
const score = 100;
const scoreValue = 100.3

const isLoggin = false;
const outsideTemp = null
let userEmail;
const id = Symbol('1230')
const anotherid = Symbol('1230')
 
console.log(id ===anotherid)

const bigNumber = 3541541364436436436n



/*
Javascript is dynamic language

2. Non-Premitive: Call by reference
    a. array
    b.Objects
    c.Functions

 */

const heros =["Shaktiman ", "Iron Man ","Hulk"]
let myObj ={
    name : "Anurag",
    age : 18,
}

//  We acess the object by the dot operator

const myFunction = function(){
        console.log("Hello World...")
}

console.log(typeof myFunction)
console.log(typeof  myobj)
console.log(typeof heros)

/**
 * You can also refere to this given link
 https://262.ecma-international.org/14.0/index.html#sec-ecmascript-data-types-and-values
  
  */