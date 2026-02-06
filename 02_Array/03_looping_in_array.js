const myArray = [1,2,3,4,5,6,7,8];
const another_array =[];
for(let i=0;i<myArray.length;i++){
    const num = myArray[i];
    another_array.push(num * 2);
}
console.log(another_array);


console.log('------------------------------------------');

console.log("we can also destructed the array by this");
console.log("");
const [firstValue , secondValue, thirdValue, fourthValue] = [1,3,5,7];
// here firstValue contains 1 , secondValue contains 3;
// so we can excess these value
console.log(firstValue); // 1
console.log(secondValue); // 2
console.log(thirdValue); // 3
console.log(fourthValue); // 4