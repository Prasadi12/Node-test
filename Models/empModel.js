const mongoose = require('mongoose');

const empSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        age: {
            type: Number,
            required: true,
        }
    },{
        timestamps: true,
    }
);

const employee = mongoose.model('employee', empSchema);
model.export = employee;