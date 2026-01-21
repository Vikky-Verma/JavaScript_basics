//  javascript is by default
            // synchronous
            // single threaded 
    //   Execution context 
        // executed one line of code at a time 
        // --> each operation wait for the last to complete before executing 

//  Blocking code       VS         Non Blocking code
// --> block the flow of program   --> doesnt block execution 
// --> Read file sync              --> read file async
 

// synchronous = Execute line by line consecutively in a sequential manner
                //  Code that waits for an operation to complete

// asynchronous  = Allows multiple operations to be performed concurrently without waiting 
                //  Doesn't block the execution flow and allows the program to continue
                //  (I/O  operations , network requests , fetching data)
                //   Handled with Callbacks , Promises , Async/ Await
        


function func1(callback){
        setTimeout (()=>{
                console.log("task1");
                // after calling task1 i want to show the func2 which contains synchronous code
                callback ();
        },3000) // here we set time for func1
}
function func2(){
        console.log("task2");
        console.log("task3");
        console.log("task4");
}

// now here we callback func2 into func1
func1(func2);