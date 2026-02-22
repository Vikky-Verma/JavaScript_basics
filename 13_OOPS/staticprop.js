class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static method can be called without creating an instance of the class, it can be called directly on the class itself
        return`123`;
    }
}

// const hitesh =new User("hitesh");
// console.log(hitesh.createId()); // this will throw an error because createId is a static method and it cannot be called on an instance of the class, it can only be called on the class itself

console.log(User.createId()); // this will work because createId is a static method and it can be called on the class itself


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com");
iphone.logMe(); // this will work because logMe is a method of User class and Teacher class is a child class of User class, so iphone can access the logMe method of User class

// console.log(iphone.createId()); // this will throw an error because createId is a static method of User class and it cannot be called on an instance of the class, it can only be called on the class itself

console.log(Teacher.createId()); // this will work because createId is a static method of User class and Teacher class is a child class of User class, so Teacher can access the createId method of User class