// sort() = method used to sort elements of an array in place.
        //  Sorts elements as strings in lexicographical order , not alphabetical
        //  lexicographic = {alphabet + number + symbol} as strings

let fruits = ["apple" , "mango","banana","pineapple"];
fruits.sort();
console.log(fruits);
let numbers= [1,2,3,6,10,9,8,5,4];
// numbers.sort();// by this sorting occurs in lexicographical order
/* [1, 10, 2, 3, 4,
     5,  6, 8, 9
    ]
*/

numbers.sort((a,b)=>a-b);// sorting in acsending order
// to make in descending order
numbers.sort((a,b)=>b-a);
console.log(numbers);