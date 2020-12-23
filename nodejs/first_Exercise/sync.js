//with sync the execution of the code perform in the order in which they are written
//by default code executed asynchronous
//the code block take less time will be executed first
const fs = require("fs")

//we have to pass the full file name along with the encoading and callback function
// we used utf8 encoading with ecma 6 or es6 format 
//fs.readFile(__dirname+"/sample.txt","utf8",(error,data)=>{
   // if(error) throw error
   // console.log(data)
//})

//cconsole.log("this command is in below but will be executed first")
// so use try and catch to avoid the issue
try{
    const data = fs.readFileSync(__dirname+"/sample.txt","utf8")
    console.log(data)
}catch(error){
    console.log(error)
}

console.log("now this will be executd at the end")

//to avoid this issue we use synchronous method
