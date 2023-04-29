let http = require('http')
let fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) //pushing from the readStream to writeStream, and instead of sending the file in one big instance like in the example up we are sending it back in chunks
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)