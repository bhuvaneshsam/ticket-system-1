const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Ensures username is provided
  },
  email: {
    type: String,
    required: true, // Ensures email is provided
    unique: true, // Ensures email is unique in the database
  },
  password: {
    type: String,
    required: true, // Ensures password is provided
  },
});

// Create the User model based on the schema
module.exports = mongoose.model('User', userSchema);
