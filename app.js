import http, { createServer } from 'http';
import express from "express";
import mongoose from 'mongoose';
import router from './src/routes/index.js';
const app = express();
const server = http.createServer(app);

app.use(express.json());

// MongoDB connection (Replace <DB_URL> with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/v1/api',router);

server.listen(3000,(req,res)=>{
    console.log('Server running 3000');
});
