const accountId = 14576
let accountEmail = "himanshu.raj@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed
/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

accountEmail = "ahsihd@bd.com"
accountPassword = "1974614"
accountCity = "bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])