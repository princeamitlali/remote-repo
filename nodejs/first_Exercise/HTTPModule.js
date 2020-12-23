//here the pre build HTTP module is described
//require of http module
const http = require("http")

//use of http module
//used to create server in the js
// we can create clint as well using the same
const server = http.createServer(function(request,response){
    // we can manually define the content type that will be visual on screen using html tags
    //200 is the sucess status if use text/plain the html tag will overwrite
    response.writeHead(200,{"content-type":"text/html"})
    //write () the message we need to display on the server webpage
    response.write("<h1>nodejs tutorial is on work with help of nodemon<h1>")
    //end() is used to end the process if not used the process will continue and nothing will be displayed
    response.end()

}).listen(3000,()=>console.log("server is running"))

//3000 is the local host we used to run the server
// while runing with nodemon give full name with extension othertwise if index file is present it will run the index script
