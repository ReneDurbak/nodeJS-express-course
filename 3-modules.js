// Node uses CommonJS library , every file in Node is a module(by default)
// MODULES - Encapsulated code (only share minimum)

const names = require('./4-firstModule-names') //always start with a dot and slash and always require a module
//console.log(names)

const sayHi = require('./5-utils')

const data = require('./6-alternative-module')
//console.log(data)

sayHi('susan')
sayHi(names.john) //const {john, peter} = require('./4-firstModule-names') //alternative over names.john and names.peter
sayHi(names.peter)


require('./7-mind-grenade') //didn`t need to assign it to a variable it still runs even that we only invoked it because == when we import or require a module we invoke the code in it ==
                                                                                                                    //== when node exports code or a file that is a module automatically it wraps it inside a function ==