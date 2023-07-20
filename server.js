const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./Models/empModel')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/emp/get', async(req,res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/emp/gets/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/emp', async(req,res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(200).json(employee)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://admin:988470864vV@cluster1.h8edhfd.mongodb.net/Employees?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to the mongoDB')
    app.listen(port, () => {
        console.log(`NodeApi is running on port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})