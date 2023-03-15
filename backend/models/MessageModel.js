const mongoose = require("mongoose")

const messageModel = mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("messageModel", messageModel)