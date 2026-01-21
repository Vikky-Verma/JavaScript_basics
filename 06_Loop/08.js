//  the reduce() method executes a user-supplied reducer callback function on each element of the array 


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentvalue) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

console.log('');
// we can also find the highest price course by reduce method
const maxPrice = shoppingCart.reduce((max , course)=>course.price>max.price ? course : max);
console.log(maxPrice.price);