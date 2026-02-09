function saymyname(){
    console.log("V")
    console.log("I")
    console.log("K")
    console.log("K")
    console.log("Y")
}
// saymyname(); // without () it is reference
// function add(number1, number2){ //parameter
//     console.log(number1 + number2);
// }
function add(number1, number2){ //parameter
    // let result = number1 + number2;
    // return result ; // return ke nichhe ke code nhi chalte h 
    // console.log("Vikky")

    return number1+number2

}
const  result = add(3,5)
add(3,5) // argument
add(3,"5")
// console.log(add(3,"a"));
// console.log("result : ",result);

function  loginUserMessage(username){// here we can also set a default value loginUserMessage(username= "Sam") 
    //  now if u dont give any input it take Sam as input
    
    if(username=== undefined){ //underfined ko as a flase samjha jata so we can also write it as 
        //  if(!username){
        // ..............}
        console.log("ERROR 404... \nPlease enter a Username");
        return ;
    }
    return `${username}  just logged in `  // ` ` is used for the string manipulation
}
console.log(loginUserMessage("Vikky"))
console.log(loginUserMessage()) // it give output as undefined as no value is given to it
