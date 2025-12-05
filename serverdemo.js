const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url  === '/about'){
res.end('this is an about page')
    }else if(req.url === '/data'){
        let name = 'Pandiya Rajan'
     res.end(name)   
    }else{
        res.end('welcome to home')
    }

})
const port = 5000
server.listen(port, ()=>{
console.log(`server is running in the port  ${port}`)
}
)