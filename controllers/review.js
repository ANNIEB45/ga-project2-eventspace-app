const express = require('express')

const ReviewModel = require('../models/review.js')

const reviewRouter = express.Router()

//-----------------------------------------------------------------------------//

//getAll
reviewRouter.get('/', (req, res) => {
    ReviewModel.getAllReviews()
        .then((allReviews) => {
            console.log(allReviews)
            console.log('-----------------------')
            res.render('reviews/everyReview', {allReviews})
            // res.json(allReviews)
        })
        .catch(err => {
            console.log('failed to print all reviews')
            console.log(err)
            res.json(err)
        })
}) //GET ALL ROUTE WORKS

//RENDER NEW ISSUE
reviewRouter.get('/new', (req, res) => {
    res.render('reviews/addReview')
})

// EDIT ISSUE
reviewRouter.get('/:reviewId/edit', (req, res) => {
    ReviewModel.getOneReview(req.params.reviewId)
        .then((singleReview) => {
            console.log(singleReview)
            res.render('reviews/editReview', {singleReview})
            // res.json(singleReview)
        })
        .catch(err => {
            console.log('failed to edit review')
            console.log(err)
            res.json(err)
        })
})

//getOne
reviewRouter.get('/:reviewId', (req, res) => {
    ReviewModel.getOneReview(req.params.reviewId)
        .then((singleReview) => {
            console.log(singleReview)
            console.log('-----------------------')
            res.render('reviews/oneReview', {singleReview})
            // res.json(singleReview)
        })
        .catch(err => {
            console.log('failed to print one review')
            console.log(err)
            res.json(err)
        })
}) //GET ONE ROUTE WORKS

//create
reviewRouter.post('/', (req, res) => {
    ReviewModel.createReview(req.body)
        .then(() => {
            console.log('new review: ', req.body)
            console.log('-----------------------')
            // after the review has been created
            //redirected back to the blog post where the new review is created
            //so redirect back to oneBlog of blog post
            res.redirect(`/blog/${req.body.blogId}`)
            // res.json('review created')
        })
        .catch(err => {
            console.log('failed to create review')
            console.log(err)
            res.json(err)
        })
}) //POST ROUTE WORKS


//update
reviewRouter.put('/:reviewId', (req, res) => {
    ReviewModel.updateReview(req.params.reviewId, req.body)
        .then(() => {
            console.log('param is:', req.params)
            console.log('updated review: ', req.body)
            console.log('-----------------------')
            res.redirect(`/review/${req.params.reviewId}`)
            // res.json('review updated')
        })
        .catch(err => {
            console.log('failed to update review')
            console.log(err)
            res.json(err)
        })
}) //PUT REQUEST WORKS


//delete
reviewRouter.delete('/:reviewId', (req, res) => {
    ReviewModel.deleteReview(req.params.reviewId)
        .then(() => {
            res.redirect('/review')
            console.log('review deleted')
            // res.json('review deleted')
        })
        .catch(err => {
            console.log('failed to delete review')
            console.log(err)
            res.json(err)
        })
}) //DELETE REQUEST WORKS


module.exports = reviewRouter
