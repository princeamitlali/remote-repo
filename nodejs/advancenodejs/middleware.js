//middleware provides a security mechenism between server and user with verification validation and authentication

var express = require('express')

var app = express()

var mid = require("./middlewareexternal")
// the order in which the functions are used the result will be printed on the same sequence
app.use(mid({ option1: 1, opton2 : 2}))

var verification = function(request,response,next){
    if(request.params.username == 'prince'){
    console.log("genuine user")
    }
    else{
        console.log("intruder " + request.params.username)
    }
    //response.send("working")
    // if next is not present the verification will be done but the page will be on loop
    next()
}

var welcome = function(request,response,next){
    console.log("welcome")
    next()
}
// by usingthis we make this globaly that will be work on all pages
app.use(welcome)

app.get('/',welcome,(request,response)=>{
    response.send("welcome to middleware")
})

app.get('/users/:username',verification,(request,response)=>{
    response.send("user profile")
})




app.listen(3000,()=>console.log("server is running"))
