//let doesn't allow duplication
let a = 10
console.log(a)
//let a = 20
// give error  SyntaxError: Identifier 'a' has already been declared

// but you can define two identifier with the same name if the another identifieer is iin some other function

var letFunctionCheck = function(){
    let a = 20
    console.log(a)
}
letFunctionCheck();

//constant takes only a single value unless used as object
//const b = 12
//console.log(b)
//const b = 32
// will give the error SyntaxError: Identifier 'b' has already been declared
const b = {name:"prince", age : 20}
console.log(b)
//you can add values even from outside the object
b.email = "princeamitlali@gmail.com"
console.log(b)
//when used as object const values can be changed
b.age = 23
console.log(b)
// template string is the string where we can add other dynamic values
// traditionally use can use
console.log("HI " +b.name+" your age is "+b.age)
//or
console.log("HI %s your age is %s ",b.name,b.age)
//but with template string you can do the same with
console.log(`Hi ${b.name} your age is ${b.age}`)

//class
class user{
    //define constructor
    constructor(name,age,email){
        //this is used to acess class member
        this.name = "PRINCE"
        this.age = 23
    }
    setName(name){
        this.name = name
    }
    setAge(age){
        this.age = age
    }
    setEmail(email){
        this.email = "princeamitlali@gmail.com"
        this.email = email
    }
    
    //define function
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getEmail(){
        return this.email
    }
}

var pri = new user("prince",23,"xyzabc")
pri.setName('prince')
pri.setAge('23')
pri.setEmail('xyz')
console.log(pri.getName())
console.log(pri.getAge())
console.log(pri.getEmail())