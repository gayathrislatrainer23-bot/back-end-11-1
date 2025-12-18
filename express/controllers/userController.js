const User = require('../models/User')

exports.getUser = async (req,res)=>{
    console.log(1)
try{
const userData = await User.find({age:{$lt : 21}})
   console.log(userData)
if(!userData){
    res.status(404).json({
        message: 'no users found'
    })
}
res.status(200).json({
    userData
})

}catch(err){
  res.status(500).json({
            message: 'server error'
        })
}



}

// findById(id)

// User.find({_id: id})

// Assignment - 19/12/2025
// 1. User.updateOne and User.updateMany



exports.createUser = async (req,res)=>{
const {userName, email,password,age} = req.body
console.log(userName)
try{
    //2. check if user exist

console.log(1)
    const createdUser = await  User.insertOne(
        {name:userName,email,password,age})
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

exports.sendDate = (req,res)=>{
   const  data = 
    res.json(

    )
}