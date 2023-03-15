// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const env = require("dotenv/config")

// Our app
const app = express()
app.use(cors())
app.use(express.json())

// Our server
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000")
})

// Our routes
const route = require("./routes/route.js")
app.use("/", route)

// Our Mongo db
mongoose.connect(process.env.SRV_URL)
