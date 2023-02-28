const express=require('express');
var Events= require('events');

const app= express();

const eventCalled= new Events();

let count=0
eventCalled.on('counterEvent', ()=>{
    count++
    console.log("event is called"+ count);
})

app.get("/", (req, res)=>{
    res.send(" apo called")
    eventCalled.emit('counterEvent')
});


app.get("/search", (req, res)=>{
    res.send("search clled")
});


app.listen(5000);

console.log("server is running on 5000");