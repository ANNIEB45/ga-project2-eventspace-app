const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type:String,
        required: true,
        minlength: 100
    }
})
     

const blogCollection = mongoose.model('blog', blogSchema)

//-----------------------------------------------------------------------------//

//CREATE
const createBlog = (newBlog) => {
    return blogCollection.create(newBlog)
}


//READ

//get all
const getAllBlogs = () => {
    return blogCollection.find()
}

//get one
const getOneBlog = (id) => {
    return blogCollection.findById(id)
}


//UPDATE
const updateBlog = (id, newBlog) => {
    return blogCollection.findByIdAndUpdate(id, newBlog)
}


//DELETE
const deleteBlog = (id) => {
    return blogCollection.findByIdAndDelete(id)
}

module.exports = {
    createBlog,
    getOneBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog  
}  

// WORKS :)