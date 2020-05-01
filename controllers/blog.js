const express = require('express')

const BlogModel = require('../models/blog.js')
const ReviewModel = require('../models/review.js')

const blogRouter = express.Router()

//-----------------------------------------------------------------------------//

//getAll
blogRouter.get('/', (req, res) => {
    BlogModel.getAllBlogs()
        .then((allBlogs) => {
            console.log(allBlogs)
            console.log('-----------------------')
            res.render('blogs/everyBlog', {allBlogs})
            // res.json(allBlogs)
        })
        .catch(err => {
            console.log('failed to print all blogs')
            console.log(err)
            res.json(err)
        })
}) //GET ALL ROUTE WORKS

//RENDER NEW ISSUE
blogRouter.get('/new', (req, res) => {
    res.render('blogs/addBlog')
})

// EDIT ISSUE
blogRouter.get('/:blogId/edit', (req, res) => {
    BlogModel.getOneBlog(req.params.blogId)
        .then((singleBlog) => {
            console.log(singleBlog)
            res.render('blogs/editBlog', { singleBlog })
        })
        .catch(err => {
            console.log('failed to edit blog')
            console.log(err)
            res.json(err)
        })
})

//getOne
blogRouter.get('/:blogId', (req, res) => {
    BlogModel.getOneBlog(req.params.blogId)
        .then((singleBlog) => {
            console.log(singleBlog)
            console.log('-----------------------')
            ReviewModel.getAllReviewsByBlogId(req.params.blogId)
            .then((reviews) => {
                 // res.json(singleBlog)
            res.render('blogs/oneBlog', {singleBlog, reviews})
            })
        })
        .catch(err => {
            console.log('failed to print one blog')
            console.log(err)
            res.json(err)
        })
}) //GET ONE ROUTE WORKS

//create
blogRouter.post('/', (req, res) => {
    BlogModel.createBlog(req.body)
        .then(() => {
            console.log('new blog: ', req.body)
            console.log('-----------------------')
            res.redirect('/blog')
            // res.json('blog created')
        })
        .catch(err => {
            console.log('failed to create blog')
            console.log(err)
            res.json(err)
        })
}) //POST ROUTE WORKS


//update
blogRouter.put('/:blogId', (req, res) => {
    BlogModel.updateBlog(req.params.blogId, req.body)
        .then(() => {
            console.log('param is:', req.params)
            console.log('updated blog: ', req.body)
            console.log('-----------------------')
            res.redirect(`/blog/${req.params.blogId}`)
            // res.json('blog updated')
        })
        .catch(err => {
            console.log('failed to update blog')
            console.log(err)
            res.json(err)
        })
}) //PUT REQUEST WORKS


//delete
blogRouter.delete('/:blogId', (req, res) => {
    BlogModel.deleteBlog(req.params.blogId)
        .then(() => {
            res.redirect('/blog')
            console.log('blog deleted')
            // res.json('blog deleted')
        })
        .catch(err => {
            console.log('failed to delete blog')
            console.log(err)
            res.json(err)
        })
}) //DELETE REQUEST WORKS


module.exports = blogRouter


// DON'T TOUCH THIS--IT WORKS