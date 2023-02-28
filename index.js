var fs= require('fs')

var myobj = {};

fs.readFile('file1.txt', function(err, data) {
    if(!err) {
        myobj['data1']=data.toString()
    }
})

fs.readFile('file2.txt', function(err, data) {
    if(!err) {
        myobj['data2']=data.toString()
    }
})

// console.log(myobj);


// use promises  for




function doA(){
    return new Promise(function(resolve, reject) {
        fs.readFile('file2.txt', function(err, data) {
            if(!err) {
                // myobj['data2']=data.toString()
                resolve(data.toString())

            }
        })
    })
}

function doB(){
    return new Promise(function(resolve, reject) {
        fs.readFile('file1.txt', function(err, data) {
            if(!err) {
                // myobj['data1']=data.toString()
                resolve(data.toString())
            }
        })
    })
}

// doA().then(function(data) {
//     myobj['data1']=data
//     doB().then(function(data2) {
//         myobj['data2']=data2
//         console.log(myobj);
//     })

//     console.log(myobj);
// })


// console.log(myobj);


/// async await 

async function main(){
    myobj['data1']= await doA()
    myobj['data2']= await doB()
    console.log(myobj);
}

main(0)
