const express = require('express')
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Test Server')
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})