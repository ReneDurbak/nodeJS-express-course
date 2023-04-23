const path = require('path');

console.log(path.sep) //default path separator in console

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath) //base of file path
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //complete path to test.txt
console.log(absolute)