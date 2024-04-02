const express = require('express');
const app = express();
require('dotenv').config({ path: './PORT.env'});
const mongoose = require('mongoose');
const url = "mongodb+srv://Tristan:tristan@mern-cluster.rxfy8oz.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/user', authRoutes);

app.get('/', (req, res) => {
    return res.json({ msg: "hello"})
})

mongoose.connect(url).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to database')
        console.log('app running' + process.env.PORT);
    })
    
}).catch((err) => {
    console.log(err)
})



