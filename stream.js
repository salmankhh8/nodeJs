const fs= require('fs');

let content= ""

let readStream= fs.createReadStream('file.txt')


readStream.on('data', function(chunk){
    content += chunk
})// we will poass eveent data which come form fs modeule, what tever file has passed it will read dtata by data as chunkst

readStream.on('end', function(){
    console.log(content);
})

readStream.on('error', function(err){console.log(err.stack)})