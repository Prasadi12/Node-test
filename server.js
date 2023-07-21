const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./Models/empModel');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://admin:988470864vV@cluster1.h8edhfd.mongodb.net/Employees?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to the mongoDB')
    app.listen(port, ()=>{
        console.log(`NodeApi is running on port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})