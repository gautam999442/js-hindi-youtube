//singalton


// Object.create  // constraction mathod 

//objet litrals

const mysym = Symbol("key1")
const jsuser = {
    name: "himanshu",
    "full name": "Himanshu Raj",
    [mysym]: "mykey1",
    age: 18,
    location: "ara",
    email: "himanshu@google.com",
    isloggedIn: false,
    lastLoginDay: ["monday", "satarday" ]


}
// console.log(jsuser.email)
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

jsuser.email = "himanshu.rajchatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "himanshu.rajMicrosoft.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js urse, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());






