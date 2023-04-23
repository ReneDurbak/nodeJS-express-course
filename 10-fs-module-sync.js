// FS MODULE  ==== SYNC APPROACH ====



const {readFileSync, writeFileSync  } = require('fs');
console.log('start');

//another approach
//const fs = require('fs');  
//fs.readFileSync
//fs.writeFileSync


//readFileSync = first paramter - path to specific file , second parameter - encoding system for Unicode, if we dont provide it we will get ASCII table numbers

const first = readFileSync('./content/first.txt','utf-8') 
const second = readFileSync('./content/second.txt','utf-8')
console.log(first, second)

// if the file is not there node will create one and if there is one node will overwrite all the valuse that are in the file
//writeFileSync - first paramter - path where you want to create a file or what file you want to overwrtie, second parameter - what text do you want in that file
/*writeFileSync(
     './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)*/

//if we dont want to overwrite the text in a file and we only want to append the text we need to add third parameter
writeFileSync(
    './content/result-sync.txt',
   `Here is the result: ${first}, ${second}`,
   {flag:'a'} //append
)
console.log('done with this task');
console.log('starting the next one');

