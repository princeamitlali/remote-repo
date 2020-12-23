//twig uses html like syntax 
//use {{}} to contains the title and messages
//you have to install twig in order to use it
// npm install twig
//const { response } = require("express")
// we need validator to validate and filter data before it get post
// npm install express-validator
const express = require("express")
const bodyParser = require('body-parser')
//this is use to validate the data using check and errors are shown using validationResult
const {check,validationResult } = require('express-validator')
//the problem with validation is even if any single field is wrong whole inputed data will be vanished
// to overcome that we use filter of express-validator

const {matchedData, sanitieBody } = require('express-validator')
const { urlencoded } = require("body-parser")
//const { request } = require("express")


const app = express()

//acquiring body parser
//it import data in the form of url and convert that to json format
//we can add pody parser explicitly also for mode details google body-parser github
const urlEncoded = bodyParser.urlencoded({extended: true})

app.use('/static',express.static('public'))
app.use(express.json())

app.set('view engine', 'twig')
app.set('views', './public/views')

//get is used to get data from the url
//post is used to send data somewhere to verify
//also data can not be obtained ditectly thus we have to body parse them
// need to install and require body-parser package
//npm install body-parser
app.get('/',(request,response)=>{
    response.render('form',{title:"form",message:"enter username and password"})
})
// unlike get the data recived is in body so we use body instead of params
//check take the field and error msg as paramwters and check that by applying . operator for various functions
app.post('/',urlEncoded,[check('username','username shold be email id').isEmail(),
check('password','password min 5 char long').isLength({min:5}),
//here the custome validator isdefined
check('cpassword').custom((value,{req}) =>{
    if (value !== req.body.password) {
        throw new Error('Password confirmation is incorrect');
      }else{
        return true;
}
})
],
    (request, response) => {
        //we define a variable to store error using validationResult
        const error = validationResult(request)
        //as there can be more than one error thus need to map them
        console.log(error.mapped())
        //console.log(request.body)
        // using if else to routing when error present
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


app.get('/about/:a-:b',(request,response)=>{response.render('index',{title:"Arthematic Operations",
    first:parseInt(request.params.a),
    second:(request.params.b),
    sum:parseInt(request.params.a) + parseInt(request.params.b),
    sub:parseInt(request.params.a) - parseInt(request.params.b),
    mul:parseInt(request.params.a) * parseInt(request.params.b),
    div:parseInt(request.params.a) / parseInt(request.params.b)
})})

app.listen(3000,()=>console.log("server is running"))
