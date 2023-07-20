// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// app.get('/', (req,res) => {
//     res.send('Hello Prasadi...!');
// });

// app.listen(port, ()=>{
//     console.log(`Node app is running on port ${port}`)
// });

// mongoose.connect('mongodb+srv://admin:988470864vV@cluster1.h8edhfd.mongodb.net/Employees?retryWrites=true&w=majority')
// .then(() => {
//     console.log('Connected to the mongoDB.');
// }).catch((error) => {
//     console.log(error);
// });



//////////////////////////////////

// const mongoose = require('mongoose')

// const empSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Enter your name'],
//     },
//     age: {
//         type: Number,
//         required: true,
//     }
// },{
//     timestamps: true,
// }
// );

// const employee = mongoose.model('employee', empSchema)
// model.export = employee;