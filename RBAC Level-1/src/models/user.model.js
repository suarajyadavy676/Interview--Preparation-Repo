const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email:{ type: String, required: true,unique:true },
  roles: {
    type: String,
    required: true,
    enum: ["CREATOR", "VIEWER", "VIEW_ALL"],
    default: "VIEWER",
  },
});

const User = model("User", userSchema);
module.exports = User;
