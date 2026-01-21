 
let count =0 ;
// initialize the count as 0
// listen for click on the increment button 
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 

let countEl = document.getElementById("count-el") ;
// console.log(countEl)

function increment(){
    count = count + 1;
    countEl.innerText = count;
    
}
function decrement(){
    count = count -1;
    countEl.innerText = count;
     
}
function save(){
    console.log(count)
}
 