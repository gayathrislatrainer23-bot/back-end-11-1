const express = require('express');
const app = express();
const userRouter = require('./routes/usersRouter')
 app.use(express.json())
const port = 5000;

app.get('/test-api',(req,res)=>
    //  res.send('server is running properly')
res.json(
    {
        name: 'Malu',
        age:4.5
    }
)
)

app.use('/users',userRouter)

// 'localhost:5000/users/get-user'
 app.listen(port, ()=>{
    console.log('server is running')
 })