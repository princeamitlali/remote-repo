// as there is no inherit option in javascript so we have to use the prototype
//prototype serves the same purpose as the inheritance

//making a function that can futher be prototyped

var prototypeExample = function(){
    this.name = "prince"
    this.age = 23
    this.email = "princeamitlali@gmail.com"
}
var ex1 =  new prototypeExample()
console.log(ex1.name)
//you can also use this alternate method to write a function

function alternateFunction(){
    console.log("alternate way to write a function")
}

var fun = new alternateFunction()


// now if we need to add more paramenters without disturbing the original structure

//now prototyping the existing function
prototypeExample.prototype = {
    phone : 1234567890,
    getName:function(){
        return this.name
    }
}
var exampleWithPrototype = new prototypeExample()
console.log(exampleWithPrototype.phone)
console.log(exampleWithPrototype.getName())

// you can prototype any of the function define in any of the two described ways