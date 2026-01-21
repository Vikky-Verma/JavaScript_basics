//  ERROR  = An object that is created to represent a problem that occurs
            //  Occur often with user input or establishing a connection
        

console.log("hello");
// what if we mis-spelled log to lag --> this give us error TypeError

// console.log(x); //--> this give error of Uncought ReferenceError : x is not defined

// Error can be generate by any of the following issue
            //  NETWORK ERRORS
            //  PROMISE REJECTION
            //  SECURITY ERRORS

       
//  we can resolve the error using 

// try{}  = Encloses code that might potentially cause error
//  catch{ } = Catch and handle any thrown Error from try{ }
// finally{ } = (optional) Always executes. Used mostly for clean up 
                //  ex. close files , close connection , releasee resources
try{
    console.log(x);
    //  NETWORK ERRORS
    //  PROMISE REJECTION
    //  SECURITY ERRORS
}  
catch(error){
    console.error(error);
}              
finally{
    // close files
    // close connections
    //  releasee resources
    console.log("this always executes");
}

console.log("You are at the end");