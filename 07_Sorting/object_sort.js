const people = [
    {name : "Vikky Verma" , age : 22 ,gpa :9.6},
    {name : "Anubhav" , age : 22 , gpa :8},
    {name : "Sandy" , age :20, gpa : 4.0},
    {name : "Patrick" , age: 37 , gpa:2.5},
    {name : "bob" , age : 30 , gpa :23}
]
//  now sort the array of object in according to the age
people.sort((a,b)=>a.age - b.age);
console.log(people);
console.log("\n");
// now according to their gpa
people.sort((a,b)=>a.gpa - b.gpa);
console.log(people);
console.log("\n");

// now according to their name
people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);