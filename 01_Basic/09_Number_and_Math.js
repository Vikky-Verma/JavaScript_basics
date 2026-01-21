const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber = 23.568
console.log(otherNumber.toPrecision(3));

const hunderds = 10000000
console.log(hunderds.toLocaleString('en-IN'))
// Number.MAX_VALUE 



// *************************************************
                    //  Maths
console.log(Math)
console.log(Math.abs(-1))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.max(4,5,5,8,9))
console.log(Math.min(9,8,7,5))


console.log((Math.random()*10 )+1)
console.log(Math.floor(Math.random()*10 )+1) //round off to the nearest integer


const min = 10
const max =  20
console.log(Math.floor(Math.random() * (max  - min +1)) + min)
