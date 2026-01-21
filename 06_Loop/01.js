//  for

// for (let i = 0; i <= 10; i++) { // variable decalaration ; condition check ; increment/decrement;

//     const element =  i ;
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {  
    if(i==5)console.log("5 is my lucky number");
    console.log(i);
    // if(i==5)console.log("5 is my lucky number");
}


// for(let i =0 ; i<=10;i++){
//     // console.log("* ");
//     for(let j =0;j<=10;j++){
//         console.log("* ");
//     }
//     console.log("\n")
// }
for(let i =1 ;i<=4;i++){
    console.log(`Outer loop value : ${i}`)
    for(let j=1; j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
for(let i =0 ; i<=5;i++){
    let row = "";
    for(let j =i;j<=5;j++){
        row += "* ";
    }
    console.log(row)
}

for(let i =5 ; i>=0;i--){
    let row = "";
    for(let j =i;j<=5;j++){
        row += "* ";
    }
    console.log(row)
}

let myArray = ["Flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}
console.log(myArray.length);

// break--> to terminate the futher loop and continue --> to skip the current condition in loop
for(let index =1 ; index<=20;index++){
    if(index==5){
        console.log("Detected 5");
        break;
    }
    console.log(`the value of i is ${index}`);
}

for(let index =1 ; index<=6;index++){
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`the value of i is ${index}`);
}
