const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user'); // Adjust the path as necessary

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);

// MongoDB connection with error handling
mongoose.connect(
    'mongodb+srv://marouaallal12:Y2dV65nGLyWLnJEH@devfestdata.hur97.mongodb.net/devfestdata?retryWrites=true&w=majority&appName=devfestdata'
)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(3001, () => console.log('Server running on port 3001'));


