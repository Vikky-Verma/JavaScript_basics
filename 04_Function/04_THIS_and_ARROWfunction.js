//  this is used for the current context
const user = {
    username : "Vikky",
    price : 999,
    //  when we referening the current context then we use 'this' 
    welcomeMgs : function(){
        console.log(`${this.username}  welcome to this site  \nPrice of the course is ${this.price}`)
        // console.log(this) // this refer to the current context variable 
    }
}
// user.welcomeMgs()
// user.username = "Sam"
// user.welcomeMgs()

// console.log(this) // in node environment it give empty object and in browser it gives window object 

// function chai(){
//     let username = "Vikky Verma"
//    // console.log(this) // ==> this give an empty {} object in node js environment whereas in brower it give window
//    console.log(this.username) //undefined
// }

// chai()

// const chai = function(){
//     let username = "Vikky "
//     console.log(this.username)
// }
// chai();

// arrow function
// const chai = () =>{
//     let username = "Vikky "
//     console.log(this )
// }
// chai();
//  Read this from the mdn 

// const addtwo = (nums1 , nums2) => {
//     return nums1 + nums2;
// }
// console.log(addtwo(3,7))


//  Implict function 
const addtwo = (nums1 , nums2) =>  nums1 + nums2; // Jab ek line ka hi code ho 
//  Object return ek liye ushko parenthesis me wrap karna padega
const three=()=>({ username:"Vikky"})  // if we want to access the username we have to wrap it into ()

console.log(addtwo(3,7))

console.log(three())