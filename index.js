const express = require('express')
const mongoose = require('mongoose')

// routes
const argonauteRoutes = require("./routes/argonaute")

console.log('NODE_ENV:', process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI
console.log(DB_URI)

mongoose.Promise = global.Promise
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, '[Mongo DB] connection error:'))
db.once('open', () => {
    console.log('[Mongo DB] connection OK')
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/argonaute", argonauteRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})