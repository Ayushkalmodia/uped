const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Online Course Platform API');
});

// Use Routes
app.use('/api/auth',authRoutes);
app.use('/api/course', courseRoutes);





module.exports = app;