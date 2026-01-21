// class = (ES6  feature) provides a more structured 
            // and cleaner way to work with objects
            // compared to traditional constructor functions
            // ex.  static keyword , encapsulation , inheritance


class Product{
    constructor(name , price){
        this.name = name;
        this.price = price;

    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price}`);
        
    }

    calculateTotal(saleTax){
        return this.price + (this.price * saleTax);
    }
}

const product1 = new Product("Shirt ", 10.36);

product1.displayProduct(); 
const saleTax = 0.05;
const total = product1.calculateTotal(saleTax);
console.log(total);