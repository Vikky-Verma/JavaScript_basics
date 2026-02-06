//  In this we are going to learn
/*          how to concat the two arrays
            .flat
            .isArray
            .from
            .of
*/

const marvel_heros = ["Thor","IronMan", "SpiderMan"]
const dc_heros =["SuperMan", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // It append the whole array of dc_heros in to the marvel_heros3  [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3]) // ["SuperMan", "Flash", "Batman"]
// console.log(marvel_heros[3][0]) // SuperMan

// let heros = marvel_heros.concat(dc_heros)
// console.log( heros); // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'Batman' ]
// concat give other array

const all_new_heros = [...marvel_heros, ...dc_heros] // SAME AS concat but  we add  two or more array
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(2) // return a new array with all subarray element concatenated into it recursively upto the specific depth
console.log(real_another_array)

console.log(Array.isArray("Vikky")) // true 
console.log(Array.from("Vikky")) // convert into array 
console.log(Array.from({name:"Vikky"})) // Interesting case //  return empty aray []


let scored1 = 100;
let scored2 = 200;
let scored3 = 300;
console.log(Array.of(scored1,scored2,scored3)) // [ 100, 200, 300 ]

