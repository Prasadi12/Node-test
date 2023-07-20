//////////////server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const Employee = require('./Models/empModel')
// const app = express();
// const port = 3000;

// //middleware
// app.use(express.json());

// app.post('/emp', async(req,res) => {
//     try {
//       const employee =  await Employee.create(req.body);
//       res.status(200).json(employee);
//     } catch (error) {
//        console.log(error.message);
//        res.status(500).json({message: error.message});
//     }
// })

// //connected to the database
// mongoose.connect('mongodb+srv://admin:988470864vV@cluster1.h8edhfd.mongodb.net/Employees?retryWrites=true&w=majority')
// .then(() => {
//     console.log('Connected to the mongDB.');
//     app.listen(port, () => {
//         console.log(`NodeApi is running on port ${port}`);
//     });
// }).catch((error) => {
//     console.log(error);
// })


//////////////empModel

// const mongoose = require('mongoose');

// const empSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Name is required'],
//         },
//         age: {
//             type: Number,
//             required: true,
//         }
//     },{
//         timestamps: true,
//     }
// );

// const Employee = mongoose.model('Employee', empSchema);
// module.exports = Employee;