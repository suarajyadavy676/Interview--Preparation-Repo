const express = require('express')
const movieModel = require('../model/movieSchema')
const movieRouter = express.Router()
//create
movieRouter.post('/',async(req,res)=>{
  try {   
    await movieModel.create(req.body)
    res.status(200).send("data added successfully")
  } catch (error) {
    res.status(400).send("Bad request")
    
  }
})

//read
movieRouter.get('/',async(req,res)=>{
  const { title, rating, q, sortBy } = req.query;
  const filters = {};
  if (title) filters.title = title;
  if (rating) filters.rating = rating;
  if (q) filters.title = { $regex: q, $options: 'i' }; // Case-insensitive search by title

  try {
    const movies = await movieModel.find(filters).sort(sortBy || 'title');
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

//update
movieRouter.patch('/:id',async(req,res)=>{
  try {
    const { id } = req.params;
    const updatedMovie = await movieModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).send('User not found');
    }
    res.send(updatedMovie);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
})

//delete
movieRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await movieModel.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).send('User not found');
    }
    res.send(deletedMovie);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = movieRouter