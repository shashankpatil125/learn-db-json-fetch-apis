// const Event=require('events')
// const e=Event()

const operation = require("./add");      // call the function using require 

const c=new operation();                 // create the new object of class add
// c.on('c',(a,b)=>{})                   // register a listner
c.addition(10,30)                        // passes the argument


