
const express = require("express")
const bodyParser = require('body-parser')
//first me need to acquire mongoose
var mongo = require('mongoose')
// as mongo doesn't supportecma6 thus have to use var at the placeof const
//Schema is like thetable overview means what are the colum and what will be the data type
var employeSchema = new mongo.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyRate: Number,
    workedHours: Number
})
// you can also define methods with in the mongoose for calculations
employeSchema.methods.totalSalary = function(){console.log("Total income of employee %s : $%d",this.name, this.hourlyRate*this.workedHours)

}

//once model is like the table of mysql
var employeeModel = mongo.model('Employee', employeSchema)
//once model is created need to create instance of the model to interact with the model
var employees = new employeeModel({name:"prince Amit",
email:"princeamitlali@gmail.com",
etype:"hourly",
hourlyRate:10,
workedHours:10})

console.log(employees)
//while calling the methods ensure to use the instance as it works like object
employees.totalSalary()
//you can also use data in such a manner
console.log("Total income of employee: $"+ employees.hourlyRate*employees.workedHours)

//for more details google mongoose js





const {check,validationResult } = require('express-validator')
const {matchedData, sanitieBody } = require('express-validator')
//const { urlencoded } = require("body-parser")
const app = express()
const urlEncoded = bodyParser.urlencoded({extended: true})

app.use('/static',express.static('public'))
app.use(express.json())
app.set('view engine', 'twig')
app.set('views', './public/views')

app.get('/',(request,response)=>{
    response.render('form',{title:"form",message:"enter username and password"})
})

app.post('/',urlEncoded,[check('username','username shold be email id').isEmail(),
check('password','password min 5 char long').isLength({min:5}),
check('cpassword').custom((value,{req}) =>{
    if (value !== req.body.password) {
        throw new Error('Password confirmation is incorrect');
      }else{
        return true;
}
})
],
    (request, response) => {
        const error = validationResult(request)
        console.log(error.mapped())
        if (!error.isEmpty()) {
            const user = matchedData(request)
            console.log(user)
            response.render('form', { title: "user details", error: error.mapped(), user: user })
        } else {
            const user = matchedData(request)
            console.log(user)
            response.render('login', { title: "user details", user: user })
        }

    })

app.listen(3000,()=>console.log("server is running"))
