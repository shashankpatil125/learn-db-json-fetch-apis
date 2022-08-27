const Event=require('events')

const fire=new Event();
fire.addListener
fire.on('firefunction', (name)=>{
    console.log("hello world! "+name + " max")
})

fire.emit('firefunction','shashank')

