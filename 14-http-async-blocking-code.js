


const http = require('http');

const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.end('Home Page')
  }
  if(req.url === '/about'){
    // BLOCKING CODE (sync code) !!! - for example nested for loop
    for(let i = 0; i < 1000; i++){
      for(let j = 0; j < 1000; j++){ //when user is on the about page also the user on the home page gets blocked until this loop is done only then the user(tab) on the home page can perform actions on the site
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error')

})

server.listen(5000,()=>{
  console.log('Server is listening on port 5000..')
})



