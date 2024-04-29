const User = require("../models/user.model");
const bcrypt = require('bcrypt')
 
 const resister = async(req,res)=>{
  const {username,roles,password} = req.body
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    bcrypt.hash(password,10,async(err,hash)=>{  
      if(err){
        return res.send("erron in hashing")
      }
      const userRoles = roles && roles.length > 0 ? roles : 'VIEWER';
      await User.create({...(req.body),password:hash,roles:userRoles})
      return res.send({messege:"password hash and store to db",password:hash,roles:userRoles}) 
    })
  } catch (error) {
    res.status(400).send("user is not resister some server error")
  }
}

module.exports = resister