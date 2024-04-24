const {Schema,model} = require('mongoose')

const userSchema = new Schema({
  username: { type: String, unique: true, required: true,unique:true },
  email: { type: String, unique: true, required: true,unique:true },
  password: { type: String, required: true },
});

// Product schema
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});


const User = model('User', userSchema);
const Product = model('Product', productSchema);

module.exports = { User, Product };