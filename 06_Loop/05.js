/**             OVERVIEW
 *          --> for each     
 */
//  for each --> call back function
// for each function is most prefered way for iterating in array

const coding =[ " js","cpp","java","Python", "ruby"]
coding.forEach( function (item){
    console.log(item)
}) // A function that accepts up to three arguments. forEach calls the callback  function one time for each element in the array.

console.log("")
coding.forEach((item) => {
    console.log(item)
})
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const mycoding=[
    {
        languagename:"javascript",
        languagefilename : "js"
    },
    {
        languagename:"python",
        languagefilename : "py"
    },
    {
        languagename:"c++",
        languagefilename : "cpp"
    }
   
]
console.log("------------")
mycoding.forEach((item,index)=>{
    console.log(index ,item.languagename)
})