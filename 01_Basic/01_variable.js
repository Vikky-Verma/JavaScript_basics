// Javascript is case sensitive  but not sensitive to the whitespace or line break
// javascript run from top to bottom

const accountId = 144553
let accountEmail  = "am1234@gmail.com" //no problem with scope
var accountPassword = "12345" //generally we not use var due to lack of scope
accountCity = "Jaipur"
let accountstate ;
console.log(accountstate) // if no value is alloted then it show undefined
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
accountEmail = "am541@gmail.com"
accountPassword = "112122"
accountCity = "Varanasi"
console.table([accountId , accountEmail, accountPassword, accountCity]);
/*
Perfer not to use var 
because of issue in block scope and funtional scope
*/