//  if
// if(condition==true){}
// compression statement --->   >,< ,<= ,>=, ==,!=, === (it check the type of datatype also)

if("2"!=3){
    console.log("true");
}

if("2"===2){
    console.log("true"); // will not run as the datatype is different

}
else {
    console.log("false");
}
const score = 200;
if(score > 100){ //  all the variable in the score is local 
    const power = 'fly';
    console.log(`user power : ${score} \nuser can ${power}`)
}

//  shorthand
const balance = 1000;
// if(balance>500)console.log("you have the limited rupees");


if(balance<500){
    console.log("less than 500")
}else if(balance <750) console.log("again less 750");
else { console.log("Have the specific amount")}

const userLoggedin = true;
const debitcard = true;
const logginfromGoogle = false;
const userLoggedinfromEmail = true;
if(userLoggedin && debitcard){
    console.log("Allow to buy course");
}
if(logginfromGoogle || userLoggedinfromEmail){//mutiple condition checking
    console.log("User logged in")

}
