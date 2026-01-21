/**Q-16   Intersection of Arrays (Arrays, Loops, Conditional Statements)
Find common elements between two arrays.
 */
// intersect([1, 2, 3], [2, 3, 4]); // Output: [2, 3]

const arr1 = [1,2,3,2,6];
const arr2 = [1,2,2,7,2,3];
const result = [];
arr1.map((value)=>{
    return value;
});
console.log(result);

 
/**Q-17  Count Occurrences (Objects, Arrays, Loops)
Count the occurrences of each number in an array.
 */
//countOccurrences([1, 2, 2, 3, 1]); // Output: { 1: 2, 2: 2, 3: 1 }


// ek empty obj 
// jab loop ,me ja rahe h tab element ko uska key bana de and count ko uska value
// jab loop me ghum rahe count++ and jo repeated value hogi usko -1 de denge

const countOccurrences = [1,2,2,3,1];

function count(arr){
    let ansObj = {};
    let count =1;
    countOccurrences.forEach((value)=>{
        let key = value;
        
    })
}