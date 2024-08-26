// module wrapper function
// (function(exports,require,module,_filename,_dirname){
// var x=;
// console.log(__filename);
// console.log(__dirname);
const EventEmitter= require('events');
// const emitter=new EventEmitter();
var url='http://mylogger.io/log';


// class with all eventemitter capabilities 
// for this class to container all the capabilities must use the word extends 
class Logger extends EventEmitter
{
  log(message)
{
    // send an http request,here the var/func are scoped within this module !!
    console.log(message);

    this.emit('messageLogged',{id :1,url:'https://'});
    // in order to access this loggger module we need to acces through main one that is append.js 
    // we need to mke it public !!,we need to export first 
    // during the code-2 execution it gave properties of object however,export property is set to an empty object!!
    // now if we add export to the oject it can be accesiible outisde of the module
}
}
// function log(message)
// {
//     // send an http request,here the var/func are scoped within this module !!
//     console.log(message);

//     emitter.emit('messageLogged',{id :1,url:'https://'});
//     // in order to access this loggger module we need to acces through main one that is append.js 
//     // we need to mke it public !!,we need to export first 
//     // during the code-2 execution it gave properties of object however,export property is set to an empty object!!
//     // now if we add export to the oject it can be accesiible outisde of the module
// }
// code3
// adding method log to the object exports and setting it to log function!!
// module.exports.log = log;
module.exports= Logger;
 
// })


