// let a = 10;
// const b = 20;
// var c = 241;
if(true ){
    let a = 10; // local scope or block scope
    const b = 20;// local scope or block scope
    //  in sabhi ka kaam yahi tak h {} iske bahar nhi ja sakte h 
    var c = 241; // scope ==.> global that why let and const come in the fig
 
}


//  JITNI BAAR FUCTION CALL HONGE UTNI BAAR CALL STACK ME SPACE ALLOTE HOGI

function one(){
    const username= "Vikky"
    function two(){
        const website   = "youtube"
        console.log(username)
        console.log(website);
    }
    // console.log(website); // not accessed due to out of scope
    two();//line by line interpreat
    
}

// one()


if(true){
    const username = "Vikky" 
    if(username === "Vikky"){
        const website = "youtube"
        console.log(username +" "+ website)
    } 
    // console.log(website); // not accessed due to out of scope
}

// console.log(website); // not accessed due to out of scope


 
// +++++++++++++ INTERESTING ++++++++++++96
console.log(addone(5)) // does not give error
function addone(nums){
    //  if we call this function above it . It work 
    return nums +1;
}
console.log(addone(3))


// console.log(addtwo(4)) // gives error 
const addtwo = function(num){ //expression (varible containing the function)]
    //  if we give a variable to the function like the just above then if call that variable above the function it throw error 

    return num+2;

}
console.log(addtwo(8)) // yaha pe sirf value return hui h