const mongoose = require('mongoose')
const validator = require('validator')
const { model } = require('./user')

const Task = mongoose.model('Task', {
    title: {
        type: String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task