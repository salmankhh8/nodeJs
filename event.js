const express=  require('express')

const Event= require('events')

const app= express()

let EventEmiter=  new Event()
let count= 0
EventEmiter.on('getApi', ()=>{
    count++
    console.log('event emmiter is called');
})



app.get("/", (req, res) => {
    res.send({message:'get api is called', count:count});
    EventEmiter.emit("getApi")
})

app.listen(3000, ()=>{
    console.log("port is listen in 3000");
})