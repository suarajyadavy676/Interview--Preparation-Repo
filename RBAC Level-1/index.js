const express = require('express')
const dbConnection = require('./src/config/db')
const router = require('./src/routes/user.route')
const bookRouter = require('./src/routes/book.route')
const app = express()
require('dotenv').config()

let port = process.env.PORT || 4000

app.use(express.json())

//home route
app.get('/',(req,res)=>{
  return res.send("<h1>This is home page</h1>")
})

// all routes
app.use('/user',router)
app.use('/books',bookRouter)

app.listen(port,async()=>{
  try {
    dbConnection()
    console.log(`server is running on port ${port}`)
  } catch (error) {
    console.log("error in listen port")
  }
})

