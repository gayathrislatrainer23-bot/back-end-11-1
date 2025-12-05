const http =  require('http')
const fs = require("fs");
const path = require('path');

const eventEmitter = require('events')
const emitter = new eventEmitter()

const server = http.createServer((req,res)=>{
res.writeHead(200,{"content-type" : "text/html"})

// fs.writeFileSync('demo.html',"Hello node js" )
// fs.readFile("./index.html", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
// //   console.log(data)
// res.end(data)
//     }

// console.log('file name:',path.basename(__filename))
// console.log('file name:',path.dirname(__filename))

// const fullpath = path.join(__dirname,'public','test.html')
// console.log('fullpath:', fullpath)
// res.write(`${fullpath}`)
// res.end()

emitter.on('greet', ()=>{
console.log('hello the event')
})
 emitter.emit('greet')
 })
 
 server.listen(5000,()=>{
    console.log('server is running')
 })