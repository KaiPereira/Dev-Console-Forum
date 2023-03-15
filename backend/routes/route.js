// Dependencies
const express = require("express")
const router = express.Router()
const MessageModel = require("../models/MessageModel")


// Routes
router.get("/", async (req, res) => {
    try {
        res.send("live")
    } catch (err) {
        res.send(err)
    }
})


router.get("/get-new-messages", async (req, res) => {
    try {
        const newMessages = await MessageModel.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, post) {
            console.log( post );
        });

        res.send(newMessages.message)
    } catch (err) {
        res.send(err)
    }
})


router.post("/create-message", async (req, res) => {
    try {
        const newMessage = new MessageModel({
            message: req.body.message
        })

        const saveChallenge = await newMessage.save()

        res.send(saveChallenge)
    } catch (err) {
        res.send(err)
    }
})


router.get("/all", async (req, res) => {
    try {
        const messages = await MessageModel.find()

        res.send(messages)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;