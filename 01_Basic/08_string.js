// object and array are mutuable
let name = "Anurag"
const repoCount = 50

// console.log(name + repoCount+ "Value") it is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//  another way to define string
const gameName = new String('Anurag-Mishra-JI') 
//  if we go to browser and type the just above line 
//      then type gameName --> 

console.log(gameName[0]) //accessing the string using index

console.log(gameName.__proto__);

console.log(gameName.length) // Give the size of string

console.log(gameName.toUpperCase()); // to upper case the string

console.log(gameName.charAt(5)) //used to know which char is at given index

console.log(gameName.indexOf('A')) // used to know the index of the char

const newString = gameName.substring(0,3) //last wala index ka char will not include

const anotherstring = gameName.slice(-8,2)
console.log(anotherstring)

const newString2 = "   | Anurag |    "
console.log(newString2)
console.log(newString2.trim()) // is used to terminate the starting spaces and end spaces of the string 

//check trim on mdn  

const url = "https://google.com/youtube%20video"
console.log(url.replace('%20', '-'))

console.log(url.includes('Anurag')) //this is to check whether the given char is present in the url 
console.log(url.includes('google'))

console.log(gameName.split('-')); //splite the string  