const EventEmitter = require('events'); //we are getting back class so the variable is essentialy a class, and if we want to create something custom we will extend a class
//The events module provides an EventEmitter class , which is the key to working with events in Node. js

//we are creating an instance of a class from the events module so essentaily an object- because we want to emit(emit method) and listen(on method) to an event
const customEmitter = new EventEmitter();


//the same event can have more logics(functions) and we can also have as many methods as we want
//we first listen for the event and the we emit it
customEmitter.on('response' , (name,id)=>{ //response is the name of the event, and we can access the argument of the emit function as parameters like in normaln fucntion
  console.log(`data recieved, user: ${name} with id: ${id}`)
})

customEmitter.on('response' , ()=>{ //response is the name of the event
  console.log(`some other logic here`)
})



customEmitter.emit('response', 'john', 34) //argument needs to match to the name of the event
