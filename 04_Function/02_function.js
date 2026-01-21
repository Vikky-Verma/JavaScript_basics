function calculateCartPrice(val1, val2,...num1){ // ... is called as rest operator as well as seprate operator it depend on where it is used
    //  ... is called rest operator as well as spread operator
    return num1
}
//console.log(calculateCartPrice(200,4,500,6)) //now it give me an array of all the argument
//  val1 ==> 200         val2 ==> 4 and rest is in rest operator




const user = {
    username : "Anurag",
    prices : 199
}
function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}
handleObject(user)
handleObject({
    username: "Sam",
    price:399
})

const myNewArray= [200,400,486,605,45,96]
function returnSecondValue(getarray){
    return  getarray[1]
}
console.log(returnSecondValue(myNewArray));