let value = 3
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2) // give remainder.
let str1 = "Hello"
let str2 = " Anurag"
let str3 = str1 +str2
console.log(str3)
  
console.log("1"+4)
console.log(5 + "5")
console.log("1"+4+8) // yha pe string ki tarah kaam hoga
console.log(5 +8 + "5") //yaha pe 5+8 ho raha h and then string 
console.log(+true)
console.log(+"") // when convert empty paranthesis to integer it gave value of 0

let num1 , num2 , num3
num1 = num2  = nums3 = 9*5
console.log(num1)

let gameCounter = 100
gameCounter++; //postfix 
console.log(gameCounter)
++gameCounter; //prefix
console.log(gameCounter)

// -------- BITWISE OPERATOR -----------
//  AND 

console.log("BITWISE OPERATOR ")
let x = 8; // binary : 101

let y = 3; // binary : 11
console.log(x & y) // If both of the binary is 1 then return 1
console.log(x | y) // Either one of the binary is 1 then return 1
console.log(x ^ y)  // when both the digit of the binary is opposite then return 1
console.log(~x)
console.log(x <<1); // it shift the binary number to the specific digit in the left 
console.log(x>>1); // it shift the binary number to the right by the specific number

console.log("Ternary Operator");

let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";
console.log(res);
console.log("");
// link to study
//  https://262.ecma-international.org/14.0/index.html#sec-ecmascript-data-types-and-values
//  You can also visit mdn for datatype