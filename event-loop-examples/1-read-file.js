const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => { //readFile is async and event loop offloads the result in this case to file system and console.log('starting next task') is executed and when our callback function(this function) responds with error or result only then it is executed
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task') 