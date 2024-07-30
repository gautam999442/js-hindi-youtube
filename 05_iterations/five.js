const coding = ["js", "rb", "python", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [

    {
        langugeName: "javascript",
        langugeFileName: "js"
    },
    {
        langugeName: "java",
        langugeFileName: "java"
    },
    {
        langugeName: "python",
        langugeFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.langugeFileName);
} )