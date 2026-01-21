//  JSON = (JavaScript Object Notation) data-interchange format
        //  used for exchanging data between a server and a web application 
        //  JSON files {key:value} or [value1 , value2,value3]


        //  JSON.stringify() = converts a JS object to a JSON string
        //  JSON.parse() = convert a JSON string to a JS object
const names = [
    "Anurag" , "Eshan" , "bob", "Patrick"
];

let jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {
    "name":"Anurag",
    "age" : 19,
    "isEmployed" : false,
    "hobbies" : ["karate" , "coding" , "cooking"]


} ;
jsonString = JSON.stringify(person)
console.log(jsonString);

const people = [
    {
        "name":"Anurag",
        "age" : 19,
        "isEmployed" : false,
        "hobbies" : ["karate" , "coding" , "cooking"]
    
    
    }, 
    {
        "name":"Patrick",
        "age" : 30,
        "isEmployed" : true,
        "hobbies" : [ "coding" , "jellyfishing"]
    
    },
    {
        "name":"Eshan",
        "age" : 21,
        "isEmployed" : false,
        "hobbies" : [ "coding" , "guitarplaying"]
    
    }
];
console.log(people)
jsonString = JSON.stringify(people);
console.log(people);

 