const {readFile, writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
   //--with async approach we use Try catch block
   try{

    const first = await readFile('./content/first.txt', 'utf-8'); //we are waiting for promise to be resolved and then we will get our response
    const second = await readFile('./content/second.txt','utf-8'); //promisify function/ promises in fs module do not have the encoding utf-8 automatically so we have to provide it because we will only get the buffer back
    await writeFile(
      './content/result-mind-grenade.txt', 
      `THIS IS AWESOME: ${first}, ${second}`) //we are not assigning it to a variable beause we are getting back undenifed as far as data
      //, {flag: 'a'}))
      console.log(first,second) //we console.log the response
    

   } catch(err){
     console.log(err)
   } 
    
  }

start();



// const getText = (path) =>{
//   return new Promise((resolve, reject)=>{

//     readFile(path,'utf-8', (err,data)=>{ //once the file system responds this callback invokes
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//   })

//   })
// }

                                              
// getText('./content/first.txt')
//.then(result => console.log(result)) //   we are returning prosmise - .then 
//.catch(err => console.log(err))





