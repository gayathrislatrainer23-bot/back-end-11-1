
const User = require('../models/User')
const bycrypt = require('bcrypt')

const updateUser = async (req,res)=>{
   
    const   {id}=req.params
    const {userName } = req.body
   
    try{
    const existingUser = await User.findById(id)
    if(!existingUser){
         res.status(404).json({
                message: 'no such user'
            })
    }


      res.status(200).json({
            message: 'updated sucessfully ',
            // updatedData
             existingUser
        })


}catch(err){
  res.status(500).json({
            message: 'server error'
        })
}



}


const createUser = async (req,res)=>{
const {userName, email,password,age} = req.body

console.log(userName)
try{
    //2. check if user exist
    const hashedPassword = await bycrypt.hash(password, 10);              
 console.log(hashedPassword)

console.log(1)
    const createdUser = await  User.insertOne(
        {name:userName,email,password : hashedPassword,age})
        // console.log(createdUser)
    if(createdUser){
        res.status(200).json({
            message: 'user created sucessfully'
        })
    }else{
           res.status(404).json({
            message: 'user created failed'
        })
    }
}catch(err){
       res.status(500).json({
            message: 'server error'
        })
}


}

const sendData = (req,res)=>{
   const  data = 
    res.json(

    )
}
module.exports = {
    createUser,
    getUser,
    sendData,
    updateUser

}