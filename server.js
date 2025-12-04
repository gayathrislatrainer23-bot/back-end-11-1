const http =  require('http')

 const server = http.createServer((req,res)=>{

// res.writeHead(200,{"content-type" : "text/html"})
// res.write("<h1>hello  <h1>")
// fs.writeFileSync('demo.html',"Hello node js" )
// fs.readFile("./index.html", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
// //   console.log(data)
// res.end(data)
//     }

 })


 server.listen(5000,()=>{
    console.log('server is running')
 })