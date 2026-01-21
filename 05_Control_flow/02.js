// switch(key){
//     case value:
//           break;
//     default:
//         break;
// }
const month = 3;
switch(month){
    case 1 : 
        console.log("January")
        break;
    case 2: 
        console.log("feburary")
        break;
    case 3 : 
        console.log("March")
        break; // yaddi break  na lagaye to iske nichhe ke saare case ki value print kara dega
        //  Except default
    case 4 : 
        console.log("April")
        break;
    default :
         console.log("default case match");
}