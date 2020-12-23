//filesystem also in short fs is an inbuilt module of js which we can use to read and print from a file
//it is required or exported as
const fs = require("fs")
//we have to pass the full file name along with the encoading and callback function
// we used utf8 encoading with ecma 6 or es6 format 
//fs.readFile(__dirname+"/sample.txt","utf8",(error,data)=>{
 //   if(error) throw error
 //   console.log(data)
//})

//if you want to delete the file we comment the code in order we use it further

//fs.unlink(__dirname+"/sample.txt",(error,data)=>{
  //  if(error) throw error
    //console.log(data)
//})

//connect file read and server disp;ay together
const http = require("http")
const server = http.createServer(function(request,response){
    fs.readFile(__dirname+"/sample.txt","utf8",(error,data)=>{
        //if(error) throw error
        //console.log(data)
        response.writeHead(200,{"content-type":"text/plain"})
        response.write(data)
        response.end()
    })

 }).listen(3000,()=>console.log("server is runing with reading files"))