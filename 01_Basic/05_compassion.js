console.log(2>3);
console.log(2>=3);
console.log(2< 3);
console.log(2 <=3); //give the output in bool
console.log("")   
console.log("2" > 1); 
console.log("02" >1);
console.log("")
console.log(null >0);
console.log(null ==0);
console.log(null >=0);
/**
  The resone is that an equality check == and comparison < > <= >= work differently
  comparison convert null to a number treating its as 0 \
  that why null>=0 is true and null > 0 is false
 */
console.log("")
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

// ===  Strict equality check  ===> ae datatype ko bhi check karta h 
console.log("")
console.log("2" === 2)