// Q-1 Write a function that takes an array of numbers and returns a new array where each number is doubled.
const mynums = [1,23,4,5];
// NOTE : map is also return a new array
console.log(mynums.map((values)=>{
    return values*2;
}))
// now checking can i store this double array in another array
const another_array = [];
mynums.map((values,index)=>{
    another_array[index]=mynums[index]*2;
})
console.log(another_array);

// Q-2 Write a function that filters out all odd numbers from an array.
const mynums2 = [1,2,3,4,5,6];
 
// NOTE:  filter return a new array
console.log(  mynums2.filter((value)=>{
    if(value%2==0) return value;
}))
 
// Q-3 Write a function that calculates the sum of all elements in an array.// Using reduce
const mynums3 =  [1, 2, 3, 4];

let ans2 = mynums3.reduce((accumulator, currentvalue)=>{
    return accumulator = currentvalue + accumulator;
},0);
console.log(ans2);
/**
 * Q-4 Using forEach:
Write a function that logs each element of an array along with its index.

 */

const myarr2 = ['a', 'b', 'c'] 
console.log(myarr2.forEach((value)=> console.log(value)));
// at the end of output undefined comes because 
// forEach method does not return anything. It always returns undefined


/** Q-5 Using for...in:
Write a function that takes an object and prints all its keys and values.
 */
const firstobj = {
    name:"Anurag",
    age : 25 ,
    city : "Varanasi",
}
// for iterating in the object we use for in
// Accessing keys and values 
for(let keys in firstobj){ 
    console.log(`Key : ${keys} , value : ${firstobj[keys]}`);
     
}
/** Q-6  Chaining map and filter:
Write a function that takes an array of numbers and returns a new array of squared numbers, but only for numbers greater than 5.
 */
const nums = [2, 6, 8, 3]  ;
console.log(nums.filter((values)=>{
    return values>5
}).map((modifiedValue)=>{return modifiedValue*modifiedValue}))


/**Q-7  Using reduce for a product:
Write a function that calculates the product of all numbers in an array.
*/
const nums2 = [1,2,3,4];
const ans3 =nums2.reduce((acc,curval)=>{
    return acc *= curval;
},nums2[0]);
console.log(ans3);

/** Q-8  Combining map and reduce:
Write a function that takes an array of strings and returns the total number of characters in all strings combined.
 */
const arrsum = ['hello', 'world'];
const ans4 = arrsum.map((value)=>{
    return value.length;
}).reduce((acc,length)=>{
    return acc +=length;
},0);
console.log(ans4);

// Q-9 find the maximum in the given array
let max =0;
const maxArray = [1, 5, 3, 19, 2];
maxArray.filter((value)=>{
    if(value>max)max=value;
})
console.log(max);
/** Q-10 COUNT THE EVEN NUMBERS */
const countEven =[1, 2, 3, 4, 8, 6]
let Evencount=0;
countEven.filter((value)=>{
    if(value %2==0)Evencount++;
})
console.log(Evencount);