let score = 33
console.log(typeof score) //number\
let score2 = "33abc"
console.log(typeof score2)
let valueInNumber = Number(score2)
//  when we pass a string to the Number() conversion function , it attempts to parse that string as an integer or floating-point literal
//  parseInt() parse only interger,, while parseFloat() parse both integer and floating point number


// to convert element to string --> .toString() method is used


console.log(valueInNumber)
console.log(typeof valueInNumber)
let value = null;
console.log(typeof null)
/* "33 "  =>  33;
//  33abc => NaN
true is convertt to 1 
flase is convert to 0
*/
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true 0 => false
//  "" => false  "..."(non-empty string) =>true
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
