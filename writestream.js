const fs= require('fs');

let data=" pepcoden write data"

let writeStrem= fs.createWriteStream('write.txt')

writeStrem.write(data, "utf-8");

writeStrem.end();

writeStrem.on("finish", function() {
    console.log("writing completeed");
})

console.log(global);