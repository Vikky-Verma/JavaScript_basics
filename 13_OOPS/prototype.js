let myName = "Vikky     ";
let mychannel = "VikkyChannel    ";

// console.log(myName.length);
// console.log(myName.trim().length);


// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }


}

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects.");
}

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says hello.");
}

// heroPower.hitesh(); //since heroPower is an object, it can access the hitesh method from Object.prototype
myHeroes.hitesh();

// heroPower.heyHitesh(); //since heroPower is an object, it cannot access the heyHitesh method from Array.prototype

myHeroes.heyHitesh(); //since myHeroes is an array, it can access the heyHitesh method from Array.prototype


// inheritance in javascript is based on prototypes. When we try to access a property or method of an object, JavaScript first looks for it in the object itself. If it doesn't find it there, it looks for it in the object's prototype, and so on up the prototype chain until it finds it or reaches the end of the chain (null).


const User = {
    name: "Vikky",
    email: "vikky@gmail.com"
}
const  Teacher = {
   makeVideo: true
}

const TechingSupport= {
    isAvailable: true
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = User; // Teacher inherits from User


// modern syntax
Object.setPrototypeOf(TechingSupport,Teacher); // TechingSupport inherits from Teacher

let anotherUsername = "Vikram    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length of the string is ${this.trim().length}`);

}

anotherUsername.trueLength();
"Anurag    ".trueLength();
"Aditya    ".trueLength();