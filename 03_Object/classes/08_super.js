// super = keyword is used in classes to call the constructor or 
            // access the properties and methods of a parent(superclass)
            // this = this object
            // super  = the parent



            
class Animal {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}


class Rabbit extends Animal{

    constructor(name , age , runSpeed){
        // this.name = name;
        // this.age = age;
        super(name , age);
        this.runSpeed = runSpeed;

    }
}


class Fish extends Animal{
    
    constructor(name , age , swimSpeed){
        // this.name = name;
        // this.age = age;
        super(name , age);
        this.swimSpeed = swimSpeed;
    
    }
}


class Hawk extends Animal{
    
    constructor(name , age , flySpeed){
        // this.name = name;
        // this.age = age;
        super(name , age);
        this.flySpeed = flySpeed;
    
    }
}


const rabbit = new Rabbit("rabbit" , 1 , 25);
const fish  = new Fish("fish" , 2,15);
const hawk = new Hawk("hawk" , 3 ,56);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);


console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);


console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);



