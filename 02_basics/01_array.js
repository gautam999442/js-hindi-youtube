// array

const myArr = [ 1, "himanshu", 2, 3, 4, 5, ]

const myHero = ["sktiman", " nagraj "]
const myArr2 = new Array(1,2,2,3,4,5,6)

console.log(myArr[1] );
console.log(myHero[0])
console.log(myArr2[4]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
 
// myArr.unshift(9)
myArr.shift()
console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(newArr);

console.log(typeof newArr);
console.log(typeof myArr);

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);




