const mongoose = require("mongoose")

const search = new mongoose.Schema({
    name: String,
    rating: String,
    website: String,
    review: String
})

module.exports = mongoose.model("Review", search)
