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
// console.log(marvel_heros) // It append the whole array of dc_heros in to the marvel_heros3

// let heros = marvel_heros.concat(dc_heros)
// console.log( heros);
// concat give other array

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(2) // return a new array with all subarray element concatenated into it recursively upto the specific depth
console.log(real_another_array)

console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag"))
console.log(Array.from({name:"Anurag"})) // Interesting case

let scored1 = 100;
let scored2 = 200;
let scored3 = 300;
console.log(Array.of(scored1,scored2,scored3))

