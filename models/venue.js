const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema


const venueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    squareFeet: Number,
    parkingAvailable: Boolean,
    price:{
        type: Number,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    image: String
})

const venueCollection = mongoose.model('venue-db', venueSchema)

//-----------------------------------------------------------------------------//

//CREATE
const createVenue = (newVenue) => {
    return venueCollection.create(newVenue)
}


//READ

//get all
const getAllVenues = () => {
    return venueCollection.find()
}

//get one
const getOneVenue = (id) => {
    return venueCollection.findById(id)
}


//UPDATE
const updateVenue = (id, newVenue) => {
    return venueCollection.findByIdAndUpdate(id, newVenue)
}


//DELETE
const deleteVenue = (id) => {
    return venueCollection.findByIdAndDelete(id)
}

module.exports = {
    createVenue,
    getOneVenue,
    getAllVenues,
    updateVenue,
    deleteVenue    
}

//WORKS :)
// DO NOT TOUCH
