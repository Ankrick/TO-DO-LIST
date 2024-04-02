const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref: "Todo"
    }]
})

module.exports = mongoose.model("User", userSchema);
