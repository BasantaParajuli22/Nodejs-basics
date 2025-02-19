import { EventEmitter } from 'events';

class MyCustomEmitter extends EventEmitter {};

const customEmitter = new MyCustomEmitter();

//customEmitter takes string as name 
customEmitter.on('greetings',(name)=>{
    console.log(`Its an pleasure to hear from ${name}`);
});

//calling custom event emitter
customEmitter.emit('greetings','basanta');