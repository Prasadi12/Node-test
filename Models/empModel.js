const express = require('express')

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

const Employee = mongoose.model('Employee', empSchema);
module.exports = Employee;
