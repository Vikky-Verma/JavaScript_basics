const tinderUser = new Object() //  it is a singleton object
const tinderUser2 ={} // it is not a singleton obect

tinderUser.id = "123456"
tinderUser.name = "Sammy"
tinderUser.isLoggin = false;
console.log(tinderUser)

const regularUser ={
    email : "anurag@gmail.com",
    fullname :{ // nested object (object inside the another)
            userfullname:{
                firstname : "Anurag", 
                lastname:  "Mishra"
            }
    },
    fun : function function1(){ // here fun is method inside the regularUser object
        // to call this we just have to type ==> regularUser.fun();
        console.log("function inside object");
    }

}
console.log(regularUser.fun());
console.log(regularUser.fullname)
console.log("")
console.log(regularUser.fullname.userfullname)

const obj1 ={ 1:'A',2:"B"}
const obj2 = {3:"W",4:"R"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)
// const obj3 = Object.assign({}, obj1,obj2,obj4)
// console.log(obj3)

// concat two or more object 
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)

//  when value come from databsed
// array of objects

const users = [
    {
        id : 1,
        email : "Anurag@321"

    }, 
    {
        id : 2, 
        email: "Anurag...@321"
    }, 
    {
        id : 3,
        email : "am431@google.com"
    }
]

users[1].email;
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggin'))
console.log(tinderUser.hasOwnProperty('isloggIn')) // confirm that the properties is in the object or not
// hasOwnProperty is a method used to check  if an object has specific property as its own property
