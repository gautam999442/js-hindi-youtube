//  primitive

// 7 type : String, Number, Boolearn, null, Undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 564542154846518948n

// Reference (Non primitive)



// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
    name: "hitesh",
    age: 22,
}                                      // object

const myFunction = function(){
    console.log("Hello world");
}                                      // function

console.log(typeof myObj); 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(Non-primitive)

let myYoutubename = "himanshurajdotcom"

let anothername = myYoutubename

anothername = "donnumberone"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
email: "user@gmail.com",
upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
