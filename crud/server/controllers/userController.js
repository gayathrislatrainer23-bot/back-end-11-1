
const User = require('../models/User')
const bycrypt = require('bcrypt')

const updateUser = async (req,res)=>{
   
    const   {id}=req.params
    const {userName } = req.body
           console.log(req.user)
           console.log(req.user.email)
    try{
    const existingUser = await User.findById(id)
    if(!existingUser){
         res.status(404).json({
                message: 'no such user'
            })
    }


      res.status(200).json({
            // message: 'updated sucessfully ',
            // updatedData
             existingUser
        })


}catch(err){
  res.status(500).json({
            message: 'server error'
        })
}



}



const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({email:req.user.email});
    console.log(User)
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = {

    updateUser,
    getProfile

}