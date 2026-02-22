class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new Teacher("chai","chai@gmail.com","123");
chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();
// masalaChai.addCourse(); // this will throw an error because addCourse is not a method of User class, it's a method of Teacher class 

console.log(chai === masalaChai); // false because they are different objects in memory

console.log(chai instanceof Teacher); // true because chai is an instance of Teacher class
console.log(chai instanceof User); // true because Teacher class is a child class of User class, so chai is also an instance of User class