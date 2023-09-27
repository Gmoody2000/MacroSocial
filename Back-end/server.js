const mongoose = require('mongoose');
const { User, Meal } = require('./models/user'); // Adjust the path as needed

// Your application code

// Example usage of models
const newUser = new User({ username: 'example', email: 'example@example.com' });
newUser.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('User saved successfully');
  }
});

// Find users
User.find({}, (err, users) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Found users:', users);
  }
});
