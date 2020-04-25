const mongoose = require('mongoose');
const conn = require('../db/mongoose')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
},{
    timestamps: true
})

const Tasks = conn.usersDB.model('Tasks', taskSchema)

module.exports = Tasks;