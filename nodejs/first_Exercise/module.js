//unlike java we can split the events in js and in order to use these event at a singular place
// we create modules there are several inbuild modules already available in the js
// manual creation of module

// module

//we create four  package and use in this code as module 
// functions are addition and substraction
//there are two ways by which we can export bothn are discussed seperately
// in addition.js and substraction.js

var cal = require("./addition")
var a = cal.addition(4,5)
console.log(a)

var cal2 = require("./substraction")

var b = cal2.substraction(10,5)
console.log(b)