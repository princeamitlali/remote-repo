//expresshas several module that provide support to nodejs by reduicing the codes
//installing use npm install express
//but first need to make a directory and package
// for detail refer to website

//we acquire express as like all other modules
const express = require("express")
// once acquired we can acess all functions of the express making an object of that
const app = express()
// css images are some ststic files that use in the generation of fully functional app
// in general express doesn't load ststic files thus we have to use a middlewaremethod from express.static
// we can create a dummy path to hide our static folder by adding imaginary folder prefix like ststic
// also the changes should be reflected on the location of items in html file
//here public folder is declare as ststic thus anything under that should be considered as static
app.use('/static',express.static('public'))
//creating a server using express
app.get("/",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    //send file is used to run html file or any such files
    response.sendFile(__dirname+'/index.html')
})
app.get("/users/check",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("using express now")
})
// if we need to pass parameters in the urlto acess data of passed paramenters from the database we need to get the paramenters the way to do soo is
// first we need to modify the router such that we canknow we need to gees which data

app.get("/users/singleparams/:id",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
    response.send("using express now "+ request.params.id )
})

//we can also add multiple parameters here id and pass are two diff parameters

app.get("/users/multiparam/:id/password/:pass",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
    response.send("using express now "+ request.params.id + " pass: "+ request.params.pass)
})
//but then you have to put the whole url til pass
//if you dont pass the id it will give error on webpage
//if we wantot make the parameter optional need to add "?" at the end also then all the datas will be acessed
app.get("/users/:id?",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
    if(request.params.id == undefined){
        response.send("ALL DATA ACCESED ")
   }
    else{
   response.send("using express now "+ request.params.id)
    }
})
//there are two special characters that are used in yhe routing to get to and from data
// the two characters are "-" and "."
//using -

app.get("/buswithdot/:From-:To",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
   
    response.send("Buses From "+ request.params.From + " to "+ request.params.To)
    
})


//for using "." just replace - with the .

app.get("/buswithdot/:From.:To",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
   
    response.send("Buses From "+ request.params.From + " to "+ request.params.To)
    
})

//to make them optional just put? 
app.get("/buswithdotoptional/:From?.:To?",(request,response)=>{
    //now as it is requested from url to return the inputed param we use request 
    // /users is a directory you can use any directory of data base using the path
   
    response.send("Buses From "+ request.params.From + " to "+ request.params.To)
    
})

// we can not use post to directly fetch from url
//we can done this using postman extension of chrome
//but this will fail for get
// we use postman-an chrome extension for debugging 
app.post("/users/post/profile",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("using user profile")
})

// for passing regular expressions in url
//pattern matching the char before ? is optional
app.get("/users/patternmatching/withquestoinmark/pat?mat",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("pattern matched with ? mark")
})
//char before + can be repeated
app.get("/users/patternmatching/withaddition/pat+mat",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("pattern matched with addition")
})

// with * you can replace * with any string it is used to hide original data
//it also get the strinig at the place of *
//you can also surround *  under small brackets
app.get("/users/patternmatching/withasterisk/pat(*)mat",(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("pattern matched with asterisk " + request.params[0])
})

//use of $ means there in nothing after the string fly
app.get(/.*fly$/,(request,response)=>{
    // /users is a directory you can use any directory of data base using the path
    response.send("pattern matched with dollar ")
})





app.listen(3000,()=>console.log("server is running"))



