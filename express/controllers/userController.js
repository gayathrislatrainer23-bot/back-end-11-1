const User = require('../models/User')

exports.getUser = (req,res)=>{
res.json({
    name: 'Malu',age:4.5,gender: 'female', course : 'Maths'
})


}

exports.createUser = async (req,res)=>{
const {userName, email,password,age} = req.body
try{

    const createdUser =await  User.create(
        {name:userName,email,password,age})
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