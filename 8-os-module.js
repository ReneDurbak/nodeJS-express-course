const os = require('os'); //built-in module , we can also destrcture it when we need specific method - const {uptime} = require('os');

//info about current user
//const user = os.userInfo()
//console.log(user)


// method returns the system uptime(how long our system has been running) in seconds

console.log(`The System uptime is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}


console.log(currentOS)