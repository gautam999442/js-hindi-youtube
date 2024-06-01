const user = {
    username: "himanshu",
    price: 999,

welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

 

//  function chai(){
//     let username = "himanshu"
//     console.log(this);
//  }

//  chai()

// const chai = function () {
//     let username = "himanhu"
//     console.log(this);
// }

// 

// const chai = () => {
//     let username = "himanhu"
//     console.log(this);
// }


// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "himanshu"})


console.log(addTwo(2,3))