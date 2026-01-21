try{
    const dividend = window.prompt("Enter a dividend : ");
    const divisor = window.prompt("enter the divisor");
    if(divisor ==0){
        throw new Error("you cant divide any number by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("values must be number");
    }
    const result = dividend / divisor;
     
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("you have reached the end");