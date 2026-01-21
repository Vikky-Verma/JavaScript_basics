// object literal 
// const user = {
//     username : "Anurag",
//     logincount : 8,
//     signedIn : true,
//     getUserDetails : function(){
//         console.log("Got user details from databased");
//         console.log(`username : ${this.username}`) // this clearified that we are talking about the recent username defined in the function
//         console.log(this) // if we just print what this refer --> this give me all the just above declared data

//     }
// }
// if we print this in global contest then we get only a empty {} and this vary on brower 
// it give window on brower
// console.log(this)

// console.log(user.username);
// console.log(user.getUserDetails());

/**suppose we are making  structure for the data base but we have to do that alot of code 
 * to avoid this we use constructor function
 */

// const promise = new Promise() // why this new is use
// this is used to make more than 1 object inheritance from the single object
// new naya context banane me kaam aata h 
// this (new ) is called constuctor
// a constructor fuction is used to create new object. When a function is used in this way it is typically capitalized(like User here)

function User(username,logincount,isLoggin){
    this.username= username;
    this.logincount = logincount;
    this.isLoggin= isLoggin;
    return this ; // 'this' refer to the instances of the object that is being created
    // return this statement is unneccessary in this case .
    //  By default , a constructor function returns the object that it creates(i.e this) , so returing this explicitly doesn't change the behaviour
}

// const userone = User("Anurag",12, true);
// const userTwo = User("Sam",45,false);// we are not printing userTwo but i can printed 
// this is because userTwo overwrite the context of userone;
// and this not good that why we use "new";
// console.log(userone);


const userone = new User("Anurag",12, true);
const userTwo = new User("Sam",45,false);
console.log(userone);
console.log(userTwo); // as we use 'new' give us new instance

/**----- NOTE FOR new ----
 *      When we call new , first of all an empty object is created --> instances
 *                         , second  a constructor function is called because of "new" keyword
 *                          ,third step me ae jo this keyword h wo sabhi agrument jo step 2 se aate h wo inject ho jate h
 *                          , forth step me we get our desired output
 */
console.log(userTwo.constructor) // constuctor properties khud ke hi baare me reference hota h
//  read another method from google : "instanceof"