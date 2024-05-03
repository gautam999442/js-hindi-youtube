const name = "himanshu"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('himanshu-hc')

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(anotherString);
 
const newStringOne = "   himanshu    " 
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));