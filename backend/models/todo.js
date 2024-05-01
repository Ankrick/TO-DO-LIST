const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    User: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Todo", todoSchema);
