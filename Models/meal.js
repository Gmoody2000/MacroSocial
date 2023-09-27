const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Other user fields
});

const mealSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Other meal fields
});

// Export the schemas
module.exports = {
  User: mongoose.model('User', userSchema),
  Meal: mongoose.model('Meal', mealSchema),
  // Export other models as needed
};
