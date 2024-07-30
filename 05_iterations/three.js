// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of Amarica")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game': 'NFS',
    'game': 'Spiderman'

}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }









