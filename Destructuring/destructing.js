/**
 * DESTRUCTURING : extract values from array and objects,
 *                  then assign then to variables in convenient way
 *              [] = to perform array destructuring
 *              {} = to perform object destructing
 * 
 */

//  ------------ EXAMPLE -1 ---------------
// SWAP THE VALUE OF TWO VARIABLEs
let a = 1;
let b = 2;

[a,b] = [b, a];
console.log(a);
console.log(b);

// --------------- EXAMPLE -2 -----------------
// SWAP 2 ELEMENTS IN AN ARRAY

let colors = ["red" , "green" ,"blue" , "black" , "white"];
[colors[0],colors[3]]=[colors[3],colors[0]]
console.log(colors);

// ------------------ EXAMPLE -3 -----------------
// ASSIGN ARRAY ELEMENTS TO VARIABLEs
// colors = ["red" , "green" ,"blue" , "black"];
const [firstcolor , secondcolor , thirdcolor , ...extracolors] = colors; // giving the name to element
// now instead of using index we can call them by names given by us

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

//  --------------- EXAMPLE -4 -----------------------
// EXTRACT VALUES FROM OBJECTS

const person1 ={
    firstname : "anurag",
    lastname : "mishra",
    age : 19,

}
const person2 ={
    firstname : "eshan",
    lastname : "pandey",
    age: 21,
}
const person3 ={
    firstname : "krishna",
    lastname : "pandey",
    age : 23,
}

const{firstname , lastname ,age , job = "unemployed"}= person1;
console.log(person1.firstname);

function displayPerson({firstname,lastname}){
    console.log(`name : ${firstname} ${lastname}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}
displayPerson({firstname,lastname,age,job});