const {Router} = require("express")
const bookModel = require("../models/book.model")
const verifyToken = require("../middlewares/auth.middleware")
const access = require("../middlewares/access")
const bookRouter = Router()

//create
bookRouter.post("/",verifyToken,access(["CREATOR"]),async(req,res)=>{
  try {
    await bookModel.create(req.body)
    return res.status(201).send("book created successfully")
  } catch (error) {
    console.log("error in post book routes")
    return res.status(500).json({ message: "Error posting book", error: error.message })
  }
})

//Read
bookRouter.get('/',verifyToken,access(["VIEWER","VIEW_ALL"]),async(req,res)=>{
  try {
    return res.send(await bookModel.find())
  } catch (error) {
    console.log("error in get data of book")
  }
})

bookRouter.patch('/:id',access(["CREATOR"]),async(req,res)=>{
  const {id} = req.params
  try {
    await bookModel.findByIdAndUpdate(id,req.body)
    return res.send('update book successfully')
  } catch (error) {
    console.log("error in patch")
  }
})

bookRouter.delete('/:id',access(["CREATOR"]),async(req,res)=>{
  const {id} = req.params
  try {
    await bookModel.findByIdAndDelete(id)
    return res.send('book deleted succesfully')
  } catch (error) {
    console.log("error in delete")
  }
})

module.exports = bookRouter