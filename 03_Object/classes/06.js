// static = keyword that defines properties or methods that belong
            // to a class itself rather than the objects
            // created from that class (class owns anything static , not the objects)





class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getcircumference(5));

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Anurag");
const user2 = new User("Sam");
console.log(user1);
console.log(user1.username);
console.log(User.userCount);
