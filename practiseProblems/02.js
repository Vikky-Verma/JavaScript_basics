/** Q-11  REVERSE ARRAY  */
const  Array = [1, 2, 3];

const reverseArray = [];
for(let i =Array.length-1;i>=0;i--){
    reverseArray.push(Array[i]);
}
console.log(reverseArray);

// Q-12 Write a function to flatten a nested array (only one level deep).
const Array2 = [1, [2, 3], 4, [5]];
const flattenArray = Array2.flat(2);// jitni depth chahiye () ke andar likh do
console.log(flattenArray);

// Q-13 Create an array containing the square of each number in the input array.
// here we are taking input of flattenArray
console.log(flattenArray.map((value)=>{
    return value *  value;
}))

// Q-14  Convert an object into an array of [key, value] pairs.
// toPairs({ a: 1, b: 2 }); // Output: [['a', 1], ['b', 2]]
const myObject = {
    a : 1,
    b : 3, 
    c : 44,
} 

// NOTE : A key-value pair can be stored as an array like [key, value].
let ans = [];
for(let keys in myObject){
    let pair = [keys , myObject[keys]];
    ans.push(pair);
}
console.log(ans)
 
// ***Q-15  groupBy([{ age: 20 }, { age: 30 }, { age: 20 }], 'age');
// Output: { 20: [{ age: 20 }, { age: 20 }], 30: [{ age: 30 }] }

let data = [
    {age : 20,name : "Anurag"},
    {age : 20, name : "Josh"},
    {age : 45, name : "Eshan"},
    {age : 25 , name :"Bulbul"},
];
// we have to group the objects by the age property

function groupBy(array, property) {
    let grouped = {};
    array.forEach(item => {
      let key = item[property]; // Get the value of the specified property
  
      // If the key doesn't exist in the grouped object, create it
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      // Add the current object to the array for this key
      grouped[key].push(item);
    });
  
    return grouped;
  }
  
console.log(groupBy(data, "age"));