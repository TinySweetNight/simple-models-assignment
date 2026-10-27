//REquired to use 
const mongoose = require('mongoose');

//Holding our Dog Model
let DogModel;

//New schema for our dogs.
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true
  },

  age: {
    type: Number,
    min: 0,
    required: true
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// Create the dog model based on the schema. 
DogModel = mongoose.model('Dog', DogSchema);

// Export!
module.exports = DogModel;