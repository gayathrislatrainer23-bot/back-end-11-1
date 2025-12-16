const express = require('express');

const app = express();
const userRouter = require('./routes/usersRouter')
const connectDB = require('./config/db')
 app.use(express.json())

// const connectDB  = async  () =>{

//     await  mongoose.connect('mongodb://127.0.0.1:27017/crud-test')
//   .then(() => console.log('mongodb Connected!'))
//   .catch((err)=>console.log(err))
// }

connectDB()

app.get('/test-api',(req,res)=>
  res.send('server is running properly')

)

app.use('/users',userRouter)
const port = 5000;
// 'localhost:5000/users/get-user'
 app.listen(port, ()=>{
    console.log('server is running')
 })