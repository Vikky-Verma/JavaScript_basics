//  array 


/**
    Javascript arrays are resizable 
    can contain mix of different type.
    Javascript arrays are zero-indexed array 
    array is not associative arrays and so arrays element cannot be accessed using arbitrary string as indexes
    JavaScript arrays-copy-operation create  shallow copies
    (Shallow copy ===> A shallow copy is a copy whose properties share the same reference )
    (Deep copy  ==> A deep copy of a object is a copy whose properties do not share the same reference)

    */ 

   /** OVERVIEW
    *  -->push 
    *  -->pop
    *  -->shift 
    *  -->unshift
    *  -->include
    *  -->indexof
    *  -->join
    * -->slice
    * -->splice
    */

const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman" , "Hulks","Tony Strak"]
console.log(myheros[1])
console.log(myarr[4])
const myArr2 = new Array(1,2,3,5,8)
console.log(myArr2[2])
console.log(myarr.isArray([1,2,45,7])); // this check the given in () is an array or not 


/**
 * The Undefined element can be included in an array literal by simply omitting a value between commas
 */
var sparseArray = [1,,,,,5];
console.log(sparseArray[2]); // this give undefined 


//  Do try this --->  go to console --> type const nums = [1,23,4,5] --> After enter type nums --> expand the nums--> You explore the type of prototype


//Array methods

myarr.push(6) // just add the element to the arr in a similar fasion of push_back in cpp

myarr.push(89)
myarr.pop() // just the last element of the array
console.log(myarr)

console.log("")

myarr.unshift(9) // this will add 9 to the starting index of the array
console.log(myarr)

console.log("")

myarr.shift()// this will remove the elements from the staring position
console.log(myarr)

console.log(myarr.includes(9)) // if element is not in the array then it give output false and otherwise true

console.log(myarr.indexOf(9))  // if element is not in the array then it give output -1 
// otherwise it give the index of the ask element
console.log(myarr.indexOf(3))


console.log("")
console.log("----Join------");
const newarr = myarr.join() // this convert the arr in the string

console.log("my arr")
console.log(myarr)
console.log("newarr after using join -----")
console.log(newarr)
console.log(typeof newarr)

console.log("")
console.log("")
// Slice vs splice
console.log("A",myarr)
//  slice give the arr between the given index and the upper limit is not included

const myn1 = myarr.slice(1,3) // 3 is not included
console.log(myn1)
console.log("B",myarr)
//  splice just cut the element of the array within the given index
//              and also in this upperlimit is included
const myn2  = myarr.splice(1,3) 
console.log(myarr) 
console.log(myn2)
/**
 * when is uses splice it manipulate the original value
 * and also the range index is included in splice and in slice the range index element is not included also also the original arr will not manipulate
 
 */
 