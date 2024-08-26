function sayHi(name)
{
    console.log('hello'+name);
}
sayHi("hi");
//  dem01

//  run the below lines ...the variables and the functions that are declard are not added to the global object in the node instead they are 
// scoped in the file app.js !! after running this lines we get undefined !!
// they arnt available outisde of this file becoz of node modular system  
// coed1
var message="";
console.log(global.message); 
// code1

// node modular system-code 2
console.log(module);
// code2

// code4-loading module
    //   to load we use require function!!
    var logger=require('./logger');
    console.log(logger);
    // // output-object log with single method called log
    logger.log('message');
    // here we can call the function log from app.js 
// code4


// code5-path module(better for strings)
// we are loading a built in path moduleand store it in constant called path!!
var path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);
// code5

// code6-os module
const os=require('os');
 var totalMemory=os.totalmem();
 var freeMemory=os.freemem();
// //  console.log('total memory:'+os.totalMemory);
 console.log(`Total memory: ${totalMemory}`);
 console.log(`FreeMemory: ${freeMemory}`);
// code6

// code7-fs module

   const fs=require('fs');
   //Synchronous    
   const files=fs.readdirSync('./');
   console.log(files);
   //asynchornous
//    we call the function when asynchronous operation completes or a callback
// here it describes a err and also a string array
//    here only one of the arguments come true  // 
   fs.readdir('./',function(err,files){
        if(err) console.log('Error',err);
        else console.log('Result',files);
   });

//    in the same way stimulate an error
fs.readdir('$',function(err,files){
            if(err) console.log('Error',err);
            else console.log('Result',files);
       });

// fs module

// event module -class event emitter!!
    //   load events module-first letter cap indicates it isnt a func or a var it is a class
    const EventEmitter=require('events');
    // in order to use this class create instance of class-bj 
   const emitter=new EventEmitter();
   //    listener is func that is called when event is raised

//    here we can get rid of the function where we can use arrow =>
// (arg)=>
   emitter.on('messagelogged',function(arg){ //e,event
    console.log('listener called',arg);
    });
    //making a noise ,produce-sigmal that event happened   
    emitter.emit('messagelogged' ,{ id: 1, url: 'http://'});
    //above we just raised an event but listener is the one who understands how things work
    
// event

const Logger=require('./logger');
const logger=new Logger();

logger.on('messagelogged',function(arg){ //e,event
    console.log('listener called',arg);
    });
logger.log('message');

// http module
const http= require('http');
const server= http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        res.write('hello world');
        res.end();
    }
    if(req.url=='/api/courses')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// server.on('connection',(socket)=>{
//     console.log('new connection.');
// });
server.listen(3000);
console.log('listening on port 3000...');
// 