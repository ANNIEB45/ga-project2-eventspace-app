const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/venue-db'

mongoose.connect(connectionString)
    .then(() => {
        console.log('connected to mongo at: ', connectionString)
        console.log('connected to database successfully')
    })
    .catch(err => {
        console.log('failed to connect to database')
        console.log(err)
    })


module.exports = mongoose

//DATABASE CONNECTED