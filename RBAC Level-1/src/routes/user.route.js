const {Router} = require('express')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const resister = require('../controllers/resister.controller')
const User = require('../models/user.model')

let router = Router()

router.post('/register',resister)

router.post('/login',async(req,res)=>{
  let {password,email} = req.body
  let existUser = await User.findOne({email})
  try {
    if(!existUser){
      return res.send("please resister then login again")
    }
    bcrypt.compare(password,existUser.password,(err,result)=>{
      if(err){
        return res.send("password is wrong")
      }
      jwt.sign({userId:existUser.id,roles:existUser.roles},process.env.JWT_SECRET,{expiresIn:"2h"},(err,token)=>{
        if(err){
          return res.send("error at the token generating time")
        }
        console.log(token)
        return res.send({messege:"login successfully",token})
      })
    })
  } catch (error) {
    console.log('error in login')
  }
})

module.exports = router