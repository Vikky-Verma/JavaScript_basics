// The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// promise future me ja ke process hote h
/**A promise is in one of these states :
 * 1. Pending : initial state , neither fullfilled nor rejected
 * 2. Fulfilled : meaning that the operation was completed successfully
 * 3. Rejected : meaning that the operation failed
 */
//  In majority of the operation we seem to consume the promise rather than making it


// creation of promise
const promise1 = new Promise(function(resolve , reject){
    //  what are the work of promise   
    // Do  an asynchro task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
}) 
//  Promise consumption
promise1.then(function(){
    console.log("Promise consumed");
}) // then() connected directly with resolve

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved without storing in variable ")
})
const promise3 = new Promise(function (resolve , reject){
    setTimeout((function(){
        resolve({username: "Anurag", email:"anurag@ai"})
    }),1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username : "anurag", password: "124"})

        }else{
            reject('404 ERROR... something went wrong');
        }
    },1000)
})
// promise4.then().catch() //.then() se value le lunga and then .catch se error 
promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{// chaining kar rahe h of .then() --> ae wo uper wale then se jo value aayengi wo isme use karenge
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The Promised is either resolved or rejected"))

const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username : "Eshan", password: "124"})

        }else{
            reject('408 ERROR... something went wrong');
        }
    },1000)
});

async function consumePromise5(){ 
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
     
    
}
consumePromise5()

// async function getallUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json(); // conversion to json will take time 
//     console.log(data);
//    } catch (error) {
//         console.log("E : ", error);
//    }
// }

// getallUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log("Error"))