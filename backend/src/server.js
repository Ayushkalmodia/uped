const app = require('./app');
const connectDB = require('./config/db');

// Connect to database
connectDB();



app.listen(3001,() =>{
    console.log('Server is running on port 3001');
})