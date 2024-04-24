const {model,Schema} = require('mongoose')

const movieSchema = new Schema({
  title:{type:String,required:true},
  posterURL:{type:String,required:true},
  imdbId:String
})

const movieModel = model("movie",movieSchema)

module.exports= movieModel