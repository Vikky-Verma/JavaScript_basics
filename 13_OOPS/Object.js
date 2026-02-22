function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2; // we can add properties to function as well because function is also an object in js

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // we can access the properties of function as well
console.log(multiplyBy5.prototype); // we can access the prototype of function as well

// in javascript function is also an object and we can add properties to it as well as we can access the prototype of the function as well.

function createUser(username , score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++; // this ka mtblab jis jisne bulaya usi par increment method apply hoga
}

createUser.prototype.printMe = function(){
    console.log(`Price is : ${this.score}`);
}

const chai = new createUser("chai", 50);
const tea = new createUser("tea", 60);

chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/