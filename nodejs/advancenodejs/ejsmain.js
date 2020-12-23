//ejs uses html tag
//you have to install ejs in order to use it
// npm install ejs 
const { response } = require("express")
const express = require("express")
const app = express()

app.use('/static',express.static('public'))

app.set('view engine', 'ejs')
app.set('views', './public/views')


app.get('/',(request,response)=>{
    response.render('index',{title:"app with ejs",message:"welcome to app creatd on ejs view"})
})

app.listen(3000,()=>console.log("server is running"))
