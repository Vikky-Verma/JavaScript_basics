//  Immediately Invoked Function Expression (IIFE)--> when the gobal function get pollluted with variable
(function chai(){ // named iife
    console.log("DB CONNECTED");

})(); // for iife ; is needed for the completion and so that another function can run
// ()is for function defination and ()another is for execution
//  it is also can write in arrow function
((name)=>{
    console.log( `DB CONNECTED ${name}` );
})("Anurag");