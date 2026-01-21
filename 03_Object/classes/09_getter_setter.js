// getter -> special method that make a property readable
// setter -> special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width , height){
        this.width = width ;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0 ){
            this._width = newWidth; // _width is now a private or protected member variable
        }
        else console.log("Width must be a positive number");
    }
    set height(newheight){
        if(newheight > 0 ){
            this._height = newheight;  // here height become private

        }
        else console.log("Width must be a positive number");
    }

    //  if we dont use get then when the desire format mil jata h to woo console.log nhi hoga

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._height * this._width;
    }
    

}

// const rectangle = new Rectangle(-1000 , "pizza"); // this is not we want
// console.log(rectangle.width);
// console.log(rectangle.height);
//  to make it only for the valid program we use setter and getter

const rectangle = new Rectangle(3 , 4); // this is not we want
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area)

// we can also reassigned the values
// rectangle.width = -100;
// rectangle.height = "pizza";