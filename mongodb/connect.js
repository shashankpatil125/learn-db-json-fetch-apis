const mongoose = require('mongoose')


async function max(){
    await mongoose.connect('mongodb+srv://shash:lalitpatil@cluster0.y1boyoa.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log("connected"))
        .catch(err => console.log("not connected", err))
        
        const taskList = new mongoose.Schema({
            task: String,
            prority: Number,
            related: String
        })
        console.log(t)
        console.log(taskList)
}
const t = {
    task: String,
    prority: Number,
    related: String
}
max()
