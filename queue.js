function add(a,b){
    console.log(a+b);
}

// add(2,5)


setImmediate(()=>{// will go to check handlers 
    add(2,5)
},3000)

setTimeout(()=>{// will go
    add(2,8) 
},3000)


process.nextTick(()=>{
    add(10,10)
    console.log("next tick");
})