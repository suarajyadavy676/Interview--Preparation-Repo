const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("db conntected")
    
  } catch (error) {
    console.log(error)
  }
   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = main