// Event Module
import EventEmitter from 'events';

// Creating Class
class MyEmitter extends EventEmitter {}

// Creating object
const myEmitter = new MyEmitter();

// // example 01

// //Register Event Listener
// myEmitter.on('event',()=>{
//     console.log('An Event Occured !')
// });
// myEmitter.emit('event');
// myEmitter.emit('event');


// // example 02
// //Register Event Listener
// let m = 0;
// myEmitter.on('event',()=>{
//     console.log(++m);
// });
// myEmitter.emit('event');
// myEmitter.emit('event');

// example 03
//Register Event Listener
let m = 0;
myEmitter.once('event',()=>{
    console.log(++m);
});
myEmitter.emit('event');
myEmitter.emit('event');