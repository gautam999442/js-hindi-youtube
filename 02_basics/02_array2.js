

// let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
// date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// // Legacy method; always interprets two-digit year values as relative to 1900
// date.setYear(98);
// date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// date.setYear(22);
// date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)


let date = new Date(98, 1)
// console.log(date.getDay());


const marval_heros = ["thor", "ironman",  "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][0])

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marval_heros, ...dc_heros]

console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("himanshu"));
console.log(Array.from("himanshu"))

console.log(Array.from({name: "himanshu"}));  // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





