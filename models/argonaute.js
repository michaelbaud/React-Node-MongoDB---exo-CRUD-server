const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ArgonauteSchema = new Schema({
    name: { type: String, required: true, unique: true }
})

const Argonaute = mongoose.model('Argonaute', ArgonauteSchema)
module.exports = Argonaute