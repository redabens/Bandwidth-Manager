const mongoose = require('mongoose');
const  Metric = require('./models/metrics.cjs'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const User = require('./models/User.cjs');
// MongoDB connection with error handling
mongoose.connect(
    'mongodb+srv://redabens:Redabens2004..@cluster-rs.iwvq9.mongodb.net/bandwidth'
)
.then(() => {
    console.log('MongoDB connected successfully....');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
const user = new User({
    firstname: 'Admin',
    lastname: 'Admin',
    email: 'admin123@gmail.com',
    password: bcrypt.hashSync('admin123',256),});
 user.save()
 .then(() => {
     console.log('User created successfully....');
 })
.catch(err => {
    console.error('Error creating user:', err);
});
