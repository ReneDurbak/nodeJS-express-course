const http = require('http')

const server = http.createServer((req, res) => { 
  console.log('request event')//when there is request this console.log executes
  res.end('Hello World')
})

server.listen(5000, () => { //with server.listen(async function) so it stay alive even if we refresh the page and we tell event loop - hey, just keep listening to the server for the upcoming requests
  console.log('Server listening on port : 5000....')
})