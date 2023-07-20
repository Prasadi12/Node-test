const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name'],
    },
    age: {
        type: Number,
        required: true,
    }
},{
    timestamps: true,
}
);

const employee = mongoose.model('employee', empSchema)
model.export = employee;