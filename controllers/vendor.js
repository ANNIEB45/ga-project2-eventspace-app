const express = require('express')

const VendorModel = require('../models/vendor.js')

const vendorRouter = express.Router()

//-----------------------------------------------------------------------------//

//getAll
vendorRouter.get('/', (req, res) => {
    VendorModel.getAllVendors()
        .then((allVendors) => {
            console.log(allVendors)
            console.log('-----------------------')
            res.render('vendors/everyVendor', { allVendors })
            // res.json(allVendors)
        })
        .catch(err => {
            console.log('failed to print all vendors')
            console.log(err)
            res.json(err)
        })
}) //GET ALL ROUTE WORKS

//RENDER NEW ISSUE
vendorRouter.get('/new', (req, res) => {
    res.render('vendors/addVendor')
})

// EDIT ISSUE
vendorRouter.get('/:vendorId/edit', (req, res) => {
    VendorModel.getOneVendor(req.params.vendorId)
        .then((singleVendor) => {
            console.log(singleVendor)
            res.render('vendors/editVendor', { singleVendor })
            // res.json(singelIssue)
        })
        .catch(err => {
            console.log('failed to print one vendor')
            console.log(err)
            res.json(err)
        })
})

//getOne
vendorRouter.get('/:vendorId', (req, res) => {
    VendorModel.getOneVendor(req.params.vendorId)
        .then((singleVendor) => {
            console.log(singleVendor)
            console.log('-----------------------')
            res.render('vendors/oneVendor', { singleVendor})
            // res.json(singleVenue)
        })
        .catch(err => {
            console.log('failed to print one vendor')
            console.log(err)
            res.json(err)
        })
}) //GET ONE ROUTE WORKS

//create
vendorRouter.post('/', (req, res) => {
    VendorModel.createVendor(req.body)
        .then(() => {
            console.log('new vendor: ', req.body)
            console.log('-----------------------')
            res.redirect('/vendor')
            // res.json('vendor created')
        })
        .catch(err => {
            console.log('failed to create vendor')
            console.log(err)
            res.json(err)
        })
}) //POST ROUTE WORKS


//update
vendorRouter.put('/:vendorId', (req, res) => {
    VendorModel.updateVendor(req.params.vendorId, req.body)
        .then(() => {
            console.log('param is:', req.params)
            console.log('updated vendor: ', req.body)
            console.log('-----------------------')
            res.redirect(`/vendor/${req.params.vendorId}`)
            // res.json('vendor updated')
        })
        .catch(err => {
            console.log('failed to update vendor')
            console.log(err)
            res.json(err)
        })
}) //PUT REQUEST WORKS


//delete
vendorRouter.delete('/:vendorId', (req, res) => {
    VendorModel.deleteVendor(req.params.vendorId)
        .then(() => {
            res.redirect('/vendor')
            console.log('vendor deleted')
            // res.json('vendor deleted')
        })
        .catch(err => {
            console.log('failed to delete vendor')
            console.log(err)
            res.json(err)
        })
}) //DELETE REQUEST WORKS


module.exports = vendorRouter

// DON'T TOUCH IT---IT WORKS
