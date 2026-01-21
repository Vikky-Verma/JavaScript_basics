//  this is used for the current context
const user = {
    username : "Anurag",
    price : 999,
    //  when we referening the current context then we use 'this' 
    welcomeMgs : function(){
        console.log(`${this.username}  welcome to this site  \nPrice of the course is ${this.price}`)
    }
}
user.welcomeMgs()
user.username = "Sam"
user.welcomeMgs()

console.log(this) // in node environment it give empty object

// function chai(){
//     let username = "Anurag Mishra"
//    // console.log(this) // ==> this give an empty {} object in node js environment whereas in brower it give window
//    console.log(this.username) //undefined
// }

// chai()

// const chai = function(){
//     let username = "Anurag "
//     console.log(this.username)
// }
// chai();

// arrow function
const chai = () =>{
    let username = "Anurag "
    console.log(this )
}
chai();
//  Read this from the mdn 

// const addtwo = (nums1 , nums2) => {
//     return nums1 + nums2;
// }
// console.log(addtwo(3,7))


//  Implict function 
const addtwo = (nums1 , nums2) =>  nums1 + nums2; // Jab ek line ka hi code ho 
const three=()=>({ username:"Anurag"})  // if we want to access the username we have to wrap it into ()

console.log(addtwo(3,7))

console.log(three())