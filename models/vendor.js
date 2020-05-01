const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema


const vendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    local: Boolean,
    category: {
        type: String,
        required: true,
        enum: ['Photographer', 'Videographer', 'DJ', 'Band', 'Singer',
            'Florist', 'Rental', 'Make-up Artist', 'Hair Stylist', 'Jeweler']
    },
    //email needs to be in this format, if not print message, and it's required
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (e) => {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)
            },
            message: (wrongEmail) => `${wrongEmail.value} is not a valid email`
        },
        required: [true, 'Email is required']

    },
    //phone number needs to be in this format, if not print message
    phoneNumber: {
        type: String,
        validate: {
            validator: (n) => {
                return /\d{3}-\d{3}-\d{4}/.test(n)
            },
            message: (wrongFormat) => `${wrongFormat.value} is not a valid phone number`
        },
    },
    website: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    details: {
        type: String,
        required: true
    },
})

const vendorCollection = mongoose.model('vendor', vendorSchema)

//-----------------------------------------------------------------------------//

//CREATE
const createVendor = (newVendor) => {
    return vendorCollection.create(newVendor)
}


//READ

//get all
const getAllVendors = () => {
    return vendorCollection.find()
}

//get one
const getOneVendor = (id) => {
    return vendorCollection.findById(id)
}


//UPDATE
const updateVendor = (id, newVendor) => {
    return vendorCollection.findByIdAndUpdate(id, newVendor)
}


//DELETE
const deleteVendor = (id) => {
    return vendorCollection.findByIdAndDelete(id)
}

module.exports = {
    createVendor,
    getOneVendor,
    getAllVendors,
    updateVendor,
    deleteVendor
}

//WORKS :)