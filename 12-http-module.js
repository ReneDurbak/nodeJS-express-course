const http = require('http')
                                //both parameters are represented by objects
const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about'){
    res.end('here is our short history')
}

res.end(`
<h1>Opps!</h1>
<div>We can't seem to find the page you are looking for</div>
<a href="/"> back home </a>
`)

})


server.listen(5000)