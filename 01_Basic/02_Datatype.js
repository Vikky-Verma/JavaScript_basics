"use strict"; // treat all JS code as newer version
// alert("Hello! I am here...") //we are using here nodejs not browser
console.log(3+3)
console.log("Anurag")
/* documentation used in this journey is 
        1.mdn 
        2.tc39
*/
let name = "Anurag"
let age = 18
let isLoggedIn = false 

//  number => 2 to power 53
// bigint 
// string => " "
// boolean => true / false
//  null => stand alone value
//  undefined => we define the variable but no value is assigned to it
//  symbol => we use this to give uniqueness
//  object

// In Boolean datatype there are some value considered as falsy values
/**
 * undefined
 * null  --> typeof null is object i.e null can be thought of as special object value that indicate "no object".
 * However null is typically regarded as the sole member of its own type adn it can be used to indicate "no value"

 * 0
 * -0
 * NaN
 * "" (empty string)
 */
console.log(typeof "mango")
console.log(typeof null) // null is an object 
