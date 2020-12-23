//print
pname = "amit"
console.log("First Sample")
//object making
var user = {name : "prince Amit", Age : 
"20", Email:"princeamitlali@gmail.com"}
console.log(user.Email)
//lambda function or ananomous function
var person = function(a,b){

    c = a+b
    
    console.log(c)
}
person(4,5);
//arrow function
var arrow = (a,b)=>console.log(a+b)
arrow(10,20);
console.log(__filename)
//module and export global variable
module.exports.abc = pname
