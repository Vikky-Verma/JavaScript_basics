/**         OVERVIEW
 *        --> for of
 *       --> Map
 */
// for of
const arr = [1,2,3,4,55,6,78,9]
for (const nums of arr) {
    console.log(nums)
    
}

let greeting = "Hello world"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}
console.log("-----------  MAP  -------------");
// map doesnt modified the original array 
// Map transform an array into another array
// Map is a callback function
console.log([1,23,4].map((value,index)=>{  // A function that accepts up to three arguments.
   // return 10; // this replace all the element of this array with 10
    return value+10;  // now this will add +10 to all the element of the array

}))


//  Maps --> is known for the unique value and order remain same 

const map = new Map();
map.set('IN',"India" )
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN',"India" )
console.log(map)

//  this will print all value of the map
for(const key of map){
    console.log(key);
}

for(const[ key, value] of map){
    console.log(key,":-", value)
}

const myobj = {
    'game1' : 'NFS',
    'game2' : "spiderman"
}
// for(const[key, value] of myobj){
//     console.log(key, ":-", value)
// } --> this throw error as object is not iterable
