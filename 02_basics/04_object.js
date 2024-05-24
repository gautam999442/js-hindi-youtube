//const tinderUser = new Object()  //singalton object or constracture object

const tinderUser = {} // none singleton object or letral object

tinderUser.id = "64815"
tinderUser.name = "rajvir"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "himanshu@154gmail.com",
    fullname: {
    userfullname:{
        firstname: "himanshu",
        lastname: "sharma"
    }
     }
}
// console.log(regularUser.fullname.userfullname.firstname);

const object1 = {1: "a", 2: "b"};
const object2 = {3: "a",4: "b"}

// const object3 = {object1, object2}
// const object3 = Object.assign({},object1, object2)
const object3 = {...object1, ...object2}
// console.log(object3);

const users = [
    {
        id: 1,
        email: "himanhu154.com"
    },
    {
        id: 1,
        email: "himanhu154.com"
    },
    {
        id: 1,
        email: "himanhu154.com"
    },
    {
        id: 1,
        email: "himanhu154.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'));


// object have name like  course
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}
  
// console.log(course.courseInstructor); normal process 

const {coursename : user} = course

// console.log(user)

// const navbar = ({ company}) => {

// }  

// navbar(company = "hitesh")

// json   it has no name it started with {} curly breses keys and value both are strings

// {
//     "name": "himasnhu"
//     "coursename": "js in hindi"
//     "price": "free"
// }

[
    {},
    {},
    {}
]