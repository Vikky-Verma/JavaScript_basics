// Memory are of two type 1. Stack  2.Heap
// stack(Primitive)          , Heap(Non-primative)
let myYoutubename = "Vikky"
let anothername = myYoutubename
console.log(anothername)

//  stack ,me copy milta h 
anothername = "Verma ji " 
console.log(myYoutubename) // go to stack 
console.log(anothername) // go to stack

let user1 = { // this go in heap memory
    email : "vikky32@gmail.com",
    upi: "User@yble"
}

let user2= user1
user2.email =  "vikky@gmail.com" 

console.log(user1.email) // heap me reference milta h
//  due to reference the change occurs in the original value 
console.log(user2.email)
console.log(user1.upi)
