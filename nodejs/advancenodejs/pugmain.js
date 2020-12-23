//pug uses expertise so not recommendd for fresher
//pug uses simple html version for code
//you have to install pug in order to use it
// npm install pug 
const { response } = require("express")
const express = require("express")
const app = express()

app.use('/static',express.static('public'))

app.set('view engine', 'pug')
app.set('views', './public/views')


app.get('/',(request,response)=>{
    response.render('index',{title:"app with pug",message:"welcome to app creatd on pug view"})
})

app.listen(3000,()=>console.log("server is running"))
