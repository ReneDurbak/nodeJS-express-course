// FS MODULE  ==== ASYNC APPROACH ====



const { readFile, writeFile } = require('fs');
console.log('start');


readFile('./content/first.txt', 'utf-8',(err,result)=>{ //callback function - function we usually pass as an arguemnt to another function: for examplne onClick('Callbackfunction') function that is supposed to do something after something
    if(err){
        console.log(err)
        return;
    }else{
        const first = result;
        console.log(result)
        readFile('./content/second.txt', 'utf-8', (err,result)=>{
            if(err){
                console.log(err)
                return;
            }else{
                const second = result;
                console.log(result)
                writeFile('./content/result-async.txt', `Here is the result for async now: ${first}, ${second}`, (err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log('done with this task');
                    }
                })
            }
        })

    }

})
console.log('starting next task');
