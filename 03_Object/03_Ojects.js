const course ={
    coursename : "JS in hindi", 
    price : "999",
    courseInstructor : "Hitesh"

}
// console.log(course.courseInstructor)

// Destructuring
const {courseInstructor : instructor}= course;  // courseInstructor is given the name instructor i.e renaming  'courseInstructor' to 'instructor'
// can also destructure by this way
const {coursename,price,courseInstructor}=course;

console.log(instructor) 
console.log(coursename);

const object5 = {
    // method : function function1(){
    //     console.log("method");
    // } these line of code is same as below code
    method(){
        console.log("Hello method");
    }
};
    console.log(object5);
    object5.method();
 


// /////////////      API

// {
//     //  JSON format(often used in APIs) , but its not actual js code
//     "name ": "hitesh",
//     "coursename": "JS in hindi" ,
//     "price": "free"
// }

//when the data comes from the database its an array like below:
// [
//     {},
//     {},
//     {}
// ]