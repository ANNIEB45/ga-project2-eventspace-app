const express = require('express')
const venueRouter = require('./controllers/venue.js')
const vendorRouter = require('./controllers/vendor.js')
const reviewRouter = require('./controllers/review.js')
const blogRouter = require('./controllers/blog.js')



const methodOverride = require('method-override')

const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.use('/venue', venueRouter)
app.use('/vendor', vendorRouter)
app.use('/review', reviewRouter)
app.use('/blog', blogRouter)


app.set('view engine', 'hbs')






const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

//WORKING