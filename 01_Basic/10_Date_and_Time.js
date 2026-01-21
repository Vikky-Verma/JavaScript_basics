// Dates
//  Date(year , month , day , hour ,minute , second,ms)

let myDate = new Date()
//  Date object are not a fundamental type like numbers are 
console.log(myDate) // 2024-11-26T17:36:33.238Z
console.log("")


var then = new Date(2006 , 0,1) // the 1st day of the 1st month of 2006
var later = new Date(2006,0,1,17,10,30) // same day , at 5:10:30pm , local time
var now = new Date();
var elapsed = now - then;
console.log("elapsed")
console.log(elapsed)
console.log(later.getFullYear()) // give the year 2006 of later


console.log(myDate.toString()) //Tue Nov 26 2024 23:06:33 GMT+0530 (India Standard Time)

console.log("")

console.log(myDate.toISOString()) // 2024-11-26T17:36:33.238Z


console.log("")

console.log(myDate.toUTCString()) // Fri, 06 Dec 2024 16:13:30 GMT

console.log("")

console.log(myDate.toJSON()) //2024-11-26T17:36:33.238Z

console.log("")

console.log(myDate.toLocaleDateString()) // 11/26/2024

console.log("")

console.log(myDate.toLocaleString()) // 11/26/2024, 11:06:33 PM

console.log(typeof myDate)

// let myCreatedDate = new Date(2024 ,0,1)
// console.log(myCreatedDate.toDateString()) // it also tell the day of that day
// let myCreatedDate = new Date(2024 ,0,1,5,3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("10-01-2024")
console.log(myCreatedDate.toLocaleString())

console.log("")

let myTimestamp = Date.now();
console.log(myTimestamp)
console.log(myCreatedDate.getTime()) // give the second in millisecs 

console.log('')
console.log(Math.floor(Date.now()/1000))

let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() +1) // 0 ==> Jan and 11 ==> December  that we add +1 so that user would not confuse

console.log(newDate.getFullYear())

console.log(newDate.toLocaleString('default',{weekday : "long"}))


