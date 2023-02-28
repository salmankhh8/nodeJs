const fs= require('fs');

let readStream = fs.createReadStream('file1.txt');

let writeStream = fs.createWriteStream('pipe.txt');

readStream.pipe(writeStream);