const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const path = require('path');
const cors =require('cors');


const app= express();



app.use(cors());


app.get('/',(req, res)=>{
res.send('hi');
});

module.exports=app;