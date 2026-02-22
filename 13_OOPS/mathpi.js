const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor); // give the descriptor of PI property


// console.log(Math.PI); // give the value of PI
// Math.PI = 9; // this will not change the value of PI because PI is a read-only property of Math object
// console.log(Math.PI); // still give the value of PI because it is a read-only property of Math object

const chai = {
    name :'ginger chai',
    price : 100,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(chai); // give the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // give the descriptor of name property of chai object
console.log(Object.getOwnPropertyDescriptor(chai, "price")); // give the descriptor of price property of chai object

// Object.defineProperty(chai, "name", {
//     writable : false, // this will make the name property read-only
//     enumerable : true, // this will make the name property enumerable
//     configurable : true // this will make the name property configurable
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // give the descriptor of name property of chai object after defining the property descriptor

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== "function"){
      console.log(`${key} : ${value}`); // give the key and value of chai object
    }
}
