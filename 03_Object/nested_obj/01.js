// nested objects = objects inside of other objects
                //  Allows you to represent more complex data structure
                //  Child object is enclosed by a parent object


                //  Person{address{} , contactInfo{}};
                // ShoppingCart{keyboard{},Mouse{},Monitor{}};



const person ={
    fullname : "Anurag Mishra",
    age : 19,
    isStudent : true,
    hobbies : ["travelling","jellyfishing","coding"],
    address:{
        street : "124 Counch St. ",
        city : "Bikini Bottom",
        country : "India"
    }
}
console.log(person.fullname);
console.log(person.hobbies[0]);
console.log(person.address);
console.log(person.address.street);
