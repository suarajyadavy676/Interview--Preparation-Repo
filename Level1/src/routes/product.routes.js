const express = require('express');
const { Product } = require('../model/model');
const productRouter = express.Router()

//create
productRouter.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(req.body)
    res.status(201).json("product added successFully");
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log('error')
  }
});


// read
productRouter.get('/',async(req,res)=>{
  try {
    let data = await Product.find()
    res.status(200).send(data)
    
  } catch (error) {
    console.log(error)
    
  }
})


// update
productRouter.patch('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    await Product.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).send("product updated successFully")
    
  } catch (error) {
    console.log("error")
    
  }
})

// delete
productRouter.delete("/:id",async(req,res)=>{
  try {
    const { id } = req.params;
    const deleteProduct = await User.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).send('product not found');
    }
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
})

module.exports = productRouter