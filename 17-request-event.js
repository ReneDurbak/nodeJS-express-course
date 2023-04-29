const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer() //server is the instance of http module
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => { //not only events module has the on method also the http method has the on method, how it works: server emits the request event called 'request' and it handles the callback function
  res.end('Welcome')
})

server.listen(5000)