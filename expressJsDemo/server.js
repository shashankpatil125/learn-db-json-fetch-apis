
const server=require('express');
const app=server();

// app.get('/', function(request, responce){
//     responce.send();
// })
app.get('/', function(request, responce){
    responce.sendFile(__dirname+"/maxtest.html");
})
app.post('/', function(req,res){
    res.send('...<p>thank you for posting</p>')
})



app.listen(5001)