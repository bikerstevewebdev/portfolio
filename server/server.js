require('dotenv').config()
const express = require('express')
const { PORT } = process.env

const app = express()
app.use(express.static(__dirname + '/../public'))

app.listen(PORT, () => {
    console.log(`Portfolio is LIVE!!! port ${PORT}`)
})