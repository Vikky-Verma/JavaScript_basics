/**.   OVERVIEW
 *  --> for each intro
 *  --> filter
 *  --> for each left over part
 */

const coding =[ " js","cpp","java","Python", "ruby"]

const values = coding.forEach((item)=>{
    console.log(item);
    // return item;
})

console.log(values);

console.log("-------- Filter ------------");
//--> This method is particularly useful for selectively extracting items from arrays based on certain criteria without modifying the original array.

// array.filter(callback(element, index, array), thisArg)

const mynums = [1,2,3,4,5,6,7,8,9,10];

console.log(mynums.filter((values,index) =>{
  return false;
 })) // if the condition is false this is going to give output []
  

console.log(mynums.filter((values,index) =>{
  return true;
})) // if the condition is true this will give the array


// const newNums = mynums.filter((num)=>num>4);


// const newNums = mynums.filter((num)=>{
//     num>4
// }); this give an empty arr
// const newNums = mynums.filter((num)=>{
//     return num>4; // due to curly bracket it begin with a scope so we have to use return keyword

// });

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);




  
console.log("-------- forEach ------------");
const newNums = []
mynums.forEach((num)=> {
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);
