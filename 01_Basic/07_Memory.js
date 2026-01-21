// Memory are of two type 1. Stack  2.Heap
// stack(Primitive)          , Heap(Non-primative)
let myYo = "Anurag"
let anothername = myYo
console.log(anothername)

//  stack ,me copy milta h 
anothername = "Mishra ji " 
console.log(myYo) // go to stack 
console.log(anothername) // go to stack

let user1 = { // this go in heap memory
    email : "am61223044@gmail.com",
    upi: "User@yble"
}

let user2= user1
user2.email =  "Anurag@gmail.com" 

console.log(user1.email) // heap me reference milta h
//  due to reference the change occurs in the original value 
console.log(user2.email)
console.log(user1.upi)
