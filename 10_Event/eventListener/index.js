// eventListener  =  Listen for specific events to create interactive web page
                //  events : keydown , keyup , keypress
                //  document.addEventListener(event , callback)


                // document.addEventListener("keydown" , event=>{
//     console.log(event);
// })

const myBox = document.getElementById("myBox");
document.addEventListener("keydown" , event=>{

    myBox.textContent = "🫨";
    myBox.style.backgroundColor = "tomato";
    
})


document.addEventListener("keyup" , event=>{

    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightblue";

})

const moveAmount = 10;
let x = 0;
let y =0;

document.addEventListener("keydown" , event=>{
    // console.log(event.key);
    if(event.key.startsWith("Arrow")){

        event.preventDefault(); // to move the image out of the frame
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left= `${x}px`
    }
})
