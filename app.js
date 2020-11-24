const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

app.use(express.json()); 

const postsRoute= require('./routes/posts');

app.use('/posts',postsRoute);


app.get('/',(req,res)=>{
    res.send('We are on home');
});



mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,
                ()=>console.log('connected to server'));

app.listen(3000);