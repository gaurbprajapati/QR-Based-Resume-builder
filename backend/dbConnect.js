const mongoose = require('mongoose')
const url = 'mongodb+srv://gaurb:68ip9mXX5FzPKCjg@cluster0.lqij1wo.mongodb.net/gaurav-resume'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.on('connected', () => {
    console.log("Mongo DB connection Successfull")
})
connection.on('error', (error) => {
    console.log(error)
})