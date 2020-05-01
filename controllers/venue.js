const express = require('express')

const VenueModel = require('../models/venue.js')

const venueRouter = express.Router()

//-----------------------------------------------------------------------------//

//getAll
venueRouter.get('/', (req, res) => {
    VenueModel.getAllVenues()
        .then((allVenues) => {
            console.log(allVenues)
            console.log('-----------------------')
            res.render('venues/everyVenue', { allVenues })
            // res.json(allVenues)
        })
        .catch(err => {
            console.log('failed to print all venues')
            console.log(err)
            res.json(err)
        })
}) //GET ALL ROUTE WORKS

// //RENDER NEW VENUE
venueRouter.get('/new', (req, res) => {
    res.render('venues/addVenue')
})

//EDIT VENUE
venueRouter.get('/:venueId/edit', (req, res) => {
    VenueModel.getOneVenue(req.params.venueId)
        .then((singleVenue) => {
            console.log(singleVenue)
            res.render('venues/editVenue', { singleVenue })
            // res.json(singelIssue)
        })
        .catch(err => {
            console.log('failed to edit venue')
            console.log(err)
            res.json(err)
        })
})

//getOne
venueRouter.get('/:venueId', (req, res) => {
    VenueModel.getOneVenue(req.params.venueId)
        .then((singleVenue) => {
            console.log(singleVenue)
            console.log('-----------------------')
            // res.json(singleVenue)
            res.render('venues/oneVenue', {singleVenue})
        })
        .catch(err => {
            console.log('failed to print one venue')
            console.log(err)
            res.json(err)
        })
}) //GET ONE ROUTE WORKS

//create
venueRouter.post('/', (req, res) => {
    VenueModel.createVenue(req.body)
        .then(() => {
            console.log('new venue: ', req.body)
            console.log('-----------------------')
            res.redirect('/venue')
            // res.json('venue created')
        })
        .catch(err => {
            console.log('failed to create venue')
            console.log(err)
            res.json(err)
        })
}) //POST ROUTE WORKS


//update
venueRouter.put('/:venueId', (req, res) => {
    VenueModel.updateVenue(req.params.venueId, req.body)
        .then(() => {
            console.log('param is:', req.params)
            console.log('updated venue: ', req.body)
            console.log('-----------------------')
            res.redirect(`/venue/${req.params.venueId}`)
            // res.json('venue updated')
        })
        .catch(err => {
            console.log('failed to update venue')
            console.log(err)
            res.json(err)
        })
}) //PUT REQUEST WORKS


//delete
venueRouter.delete('/:venueId', (req, res) => {
    VenueModel.deleteVenue(req.params.venueId)
        .then(() => {
            res.redirect('/venue')
            console.log('venue deleted')
            // res.json('venue deleted')
        })
        .catch(err => {
            console.log('failed to delete issue')
            console.log(err)
            res.json(err)
        })
}) //DELETE REQUEST WORKS


module.exports = venueRouter
