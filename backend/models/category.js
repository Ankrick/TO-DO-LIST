const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    User: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    Todo: [{
        type: mongoose.Types.ObjectId,
        ref: "Todo"
    }]
})

module.exports = mongoose.model("Category", categorySchema);
