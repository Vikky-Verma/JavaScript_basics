//  Promise = An object that manages asynchronous operation.
            //  Wrap a Promise Object around {asynchronous code};

            // PENDING --> RESOLVED or REJECTED
            // new Promise((resolve , reject)=>{asynchronous code})


function walkDog(callback){
    setTimeout(() => {
        console.log("You walk the dog 🐕");
    }, 1500);
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("You clean the kitchen 🔪");
    },2500);
}

function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("You take out the trash ♻️")
    } , 500);
}
// walkDog()
// cleanKitchen()
// takeOutTrash()

// by this, the function run according to the time taken to execute
// now if we want to do all the task in the order then we have to modified it such that it take callbacks

// callback hell
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>console.log("You finished all the choros"));
    });
});
// to prevent from this callback hell we use promise
//  when we use promise it doesn't want any callback  