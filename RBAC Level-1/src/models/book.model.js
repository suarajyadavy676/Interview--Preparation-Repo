const {Schema,model} = require('mongoose');

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
  
});

const bookModel = model('Book', bookSchema);
module.exports = bookModel;
