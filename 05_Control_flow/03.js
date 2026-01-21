const useremail = "anurag.ai";
if(useremail)console.log("Got user email")// yadi useremail is not a empty string it is consider as true otherwise false\

else console.log("Don't have user email")


/*       falsy value
    false 
    0
    -0
    BigInt 0n
    null 
    undefined
    NaN
*/
/**   truthy values
 *  "0"
 *  "false"
 *  " "
 * [ ]
 * {}
 * function(){}
 *  
 */
const arr = []
if(arr.length===0)console.log("Array is am empty")

const emptyObj = {}
if(Object.keys(emptyObj).length===0) console.log("Object is empty")

/** *   point to remember
 * false == 0 ; --> true;
 * false =="" : --> true;
 * 0 == "" ; --> true;
 */
//  Nullish Coalescing Operator (??) : null  and undefined 

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10 
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20 ;
console.log(val1)


