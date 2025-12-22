const User = require('../models/User')
const bycrypt = require('bcrypt')

const UserRegister = async (req, res,next)=>{
    console.log('1') 
    const {userName, email,password,age} = req.body
    console.log(userName)
    try{
        // req.body--> data
        //  password---> password hash
        // db store  using queries ( hashed)
        //  res message :  registation sucess
        console.log('12')
 const hashedPassword = await bycrypt.hash(password, 10);  
console.log(hashedPassword)
     const createdUser = await  User.insertOne(
         {name:userName,email, password : hashedPassword,age})

             if(!createdUser){
        res.status(404).json({
            message: 'Registration failed'
        })
    }
          res.status(200).json({
            message: 'user created sucessfully'
        })

    
    }catch(err){
        console.log(err)
      next(err)
    }

}
const  UserLogin = async ()=>{
    try{


    }catch(err){

    }

}

module.exports ={
UserRegister,
UserLogin

}