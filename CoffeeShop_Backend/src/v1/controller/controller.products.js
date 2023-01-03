// Imports
const productsModel = require("../models/model.products")
const validator = require('validator') // validator

const productsController = {
    get: (req, res) => {
        const page = (req.query.page && req.query.page > 0) ? parseInt(req.query.page) : 1
        const limit = (req.query.limit && req.query.page > 0) ? parseInt(req.query.limit) : 10
        const offset = limit * (page - 1)
        return productsModel.get(req.query, limit, offset).then(result => {
            return res.send({
                Message: 'Successfully fetch data from database',
                TotalRows: result.totalRows,
                TotalPage: result.totalPage,
                Data: result.Data
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to fetch, Error: ${error}`
            })
        })
    },
    add: (req, res) => {
        return productsModel.add(req).then(result => {
            return res.send({
                Message: result
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to add, Error: ${error}`
            })
        })
    },
    edit: (req, res) => {
        const id = req.params.id
        return productsModel.edit(req, id).then(result => {
            return res.send({
                Message: result,
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to update data, Error: ${error}`
            })
        })
    },
    remove: (req, res) => {
        const id = req.params.id
        return productsModel.remove(id).then(result => {
            return res.send({
                Message: result
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to delete data, Error: ${error}`
            })
        })
    }
}

// Exports
module.exports = productsController