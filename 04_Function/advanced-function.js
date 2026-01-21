setTimeout(function(){
    console.log('timeout'); // all the code written in this is in syn
},3000) // it wait for 3sec before running this function 
// a number in millisecond

// this setTimeout is an asynchronous code 
        // --> will not wait for one line to finish before going to the next line 

// there is another type of function --> Synchronous code
        // --> will wait for one line to finish before going to the next line


setTimeout(function (){
    console.log('interval');
    console.log('interval2');
},2000) // this will keep running the function till 2 sec
