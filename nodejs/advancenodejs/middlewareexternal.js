module.exports = function(options){
    return function(request,response,next){
        console.log("sucessfully working from other module")
        next()
    }
}