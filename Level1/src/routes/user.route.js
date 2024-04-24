const express = require('express');
const { User } = require('../model/model');


const userRouter = express.Router()

userRouter.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log('error')
  }
});

userRouter.get('/',async(req,res)=>{
  try {
    let data = await User.find()
    res.status(200).send(data)
    
  } catch (error) {
    console.log(error)
    
  }
})

userRouter.patch('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    console.log(req.body)
    await User.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).send(" updated successFully")
    
  } catch (error) {
    console.log("error")
    
  }
})

userRouter.delete("/:id",async(req,res)=>{
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
})

module.exports = userRouter