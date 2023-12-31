const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/MacrcoSocial';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
