//create and trigger events 
//in nodejs we have a inbuild module for events
//acquire the event module
const events = require("events")
//created an object of event
//EventsEmitter is work as constructor for events
const event = new events.EventEmitter()
event.on('press',()=>console.log("event has been trigerred"))
//now we add triger action we define the actionfuction with ecma6 function
event.on('click',(a,b)=>console.log(a+b))
//we can use anything at the place of click but it needs to be fire
//firing is done by emit
event.emit('press')
//event can also be parameterized
event.emit('click',4,5)

//nested events

const firstevent = function(){
    console.log("nested function")
    event.emit('afterfirst')
}



const secondEvent = function(){
    console.log("second eevnt after first event")
}
// the event is setted after the functions has been set
//and emitted once it is set otherwise likely to have error
event.on('afterfirst',secondEvent)
event.on('test',firstevent)
event.emit('test')
