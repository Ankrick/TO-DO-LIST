const express = require('express');
const app = express();
require('dotenv').config({ path: './PORT.env'});
const mongoose = require('mongoose');
const url = "mongodb+srv://Tristan:tristan@mern-cluster.rxfy8oz.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const cors = require('cors');
const morgan = require('morgan');


app.get('/', (req, res) => {
    return res.json({ msg: "hello"})
})

mongoose.connect(url).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to database')
        console.log('app running' + process.env.PORT);
    })
    
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))
app.use('/user', authRoutes);
app.use('/todo', todoRoutes);

}).catch((err) => {
    console.log(err)
})



