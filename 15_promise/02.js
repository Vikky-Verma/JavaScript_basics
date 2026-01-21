function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("You walk the dog 🐕");
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You clean the kitchen 🔪");
        },2500);

    }) 
}

function takeOutTrash(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("You take out the trash ♻️");
        // if the value is true then remove otherwise reject
        // the error will be shown by console.error(error)
    } , 500);
   })
}
// now to run using with Promise we use .then();
walkDog().then(value =>{
    console.log(value);
    return cleanKitchen()
}).then(value=>{
    console.log(value);
    return takeOutTrash();
}).then(value=>{
    console.log(value);
});