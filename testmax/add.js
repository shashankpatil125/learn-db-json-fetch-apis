const event = require('events')
const add = new event()

class cal extends event {            //we have create here a class for calculation and extend it to event object
    addition(a, b) {                 // register a listner //now we are make here a function its name is addition note we no need to append the keyword which is function
        console.log(a + b+10);          //operation 
        // this.emit('c',13,21)
    }
}

module.exports=cal;             //exports 