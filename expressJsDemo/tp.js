const express=require('express')
const a=express()

a.get('/',(req,res)=>{
    res.send("hello")
})

a.get('/get/:id',(req,res)=>{
    res.send(req.query)
})

a.listen(3000,()=>{console.log("listining")})