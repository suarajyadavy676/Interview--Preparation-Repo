const express = require('express')
const dbConnection = require('./src/config/db')
const movieModel = require('./src/model/movieSchema')
const movieRouter = require('./src/routes/movie.route')
let port = 3000

const app = express()

app.use(express.json())

app.get("/",async(req,res)=>{
  try {
    res.status(200).send("this is home route")
  } catch (error) {
    console.log(error)
  }
})
app.use('/movies',movieRouter)
app.listen(port,async()=>{
  try {
    dbConnection()
    console.log(`port is running at ${port}`)
  } catch (error) {
    console.log(err)
    
  }
})