//  Constructor = special method for defining the 
                // properties and methods of objects
                

function Car(make , model , year , color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
};
const car1 = new Car("Ford" , "Mustang",2024,"red");
console.log(car1);
