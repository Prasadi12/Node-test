const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello Prasadi');
});

app.get('/next', (req,res)=>{
    res.send('Hello Bhathiya...!!')
});

mongoose.connect('mongodb+srv://admin:988470864vV@cluster1.h8edhfd.mongodb.net/Employees?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to the mongDB.');
    app.listen(port, () => {
        console.log(`NodeApi is running on port ${port}`);
    });
}).catch((error) => {
    console.log(error);
})