const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    blogId: {
        type: String,
        required: true
    },
    date: Date,
    comment: String,
})

const reviewCollection = mongoose.model('review', reviewSchema)

//-----------------------------------------------------------------------------//

//CREATE
const createReview = (newReview) => {
    return reviewCollection.create(newReview)
}

//READ

//get all
const getAllReviews = () => {
    return reviewCollection.find()
}

//get one
const getOneReview = (id) => {
    return reviewCollection.findById(id)
}

//get by BLOG
const getAllReviewsByBlogId = (blogId) => {
    return reviewCollection.find({blogId})
}

//UPDATE
const updateReview = (id, newReview) => {
    return reviewCollection.findByIdAndUpdate(id, newReview)
}


//DELETE
const deleteReview = (id) => {
    return reviewCollection.findByIdAndDelete(id)
}

module.exports = {
    createReview,
    getOneReview,
    getAllReviews,
    updateReview,
    deleteReview,
    getAllReviewsByBlogId,
}

//WORKS :)